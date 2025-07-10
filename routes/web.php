<?php

use App\Http\Controllers\Admin\AccountSettingsController;
use App\Http\Controllers\Admin\AnalyticsController;
use App\Http\Controllers\Admin\CampaignsController;
use App\Http\Controllers\Admin\ComposeController;
use App\Http\Controllers\Admin\ConfigurationController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\RecipientController;
use App\Http\Controllers\Admin\ScheduleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecipientsController;
use App\Http\Controllers\SendMessageController;
use App\Models\templates;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Authenticated/home',[
//         'templates' => templates::get(),
//     ]);
// },
// )->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class,'index'])->name('dashboard');

    Route::get('/admin/get-segment/{segment}', [RecipientsController::class,'getsegment'])->name('admin.getsegment');
    Route::get('/admin/get-recipients/{segment}', [DashboardController::class,'getrecipients'])->name('admin.getrecipients');


    Route::post('/settings/saveconfig',[DashboardController::class,'saveConfig'])->name('admin.settings.saveconfig');

    // routes/web.php
    Route::post('/services/send-sms', [DashboardController::class,'sendmessage'])->name('admin.send.mssg'); // web middleware is added by default
});

Route::middleware('auth')->group(function(){
    Route::get('/recipient',[RecipientsController::class,'index'])->name('admin.recipients');

    Route::post('/recipients/add-contacts',[RecipientsController::class,'storeNewContacts'])->name('admin.contacts.add');
    Route::post('/to-recipients-send',[SendMessageController::class,'sendTestSms'])->name('admin.message.send');

    Route::get('/campaigns',[CampaignsController::class,'index'])->name('admin.campaigns.index');



    Route::get('/recipients',[RecipientController::class,'index'])->name('admin.recipients.index');
    Route::get('/compose',[ComposeController::class,'index'])->name('admin.compose.index');
    Route::get('/schedule',[ScheduleController::class,'index'])->name('admin.schedule.index');
    Route::get('/analytics',[AnalyticsController::class,'index'])->name('admin.analytics.index');
    Route::get('/configuration',[ConfigurationController::class,'index'])->name('admin.configuration.index');
    Route::get('/settings/account',[AccountSettingsController::class,'index'])->name('admin.accsettings.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/template/save-template',[SendMessageController::class,'saveTemplate'])->name('admin.template.save');

    Route::prefix('admin/settings')->group(function () {
        //Route::resource('accountsettings', AccountSettingsController::class);

        Route::put('email/update', [AccountSettingsController::class,'change_email'])->name('admin.settings.email.update');
        Route::put('password/update', [AccountSettingsController::class,'change_pw'])->name('admin.settings.password.update');
        // Other admin routes...

        Route::post('/registerWebhook',[DashboardController::class,'registerWebHook'])->name('admin.settings.webhook.setup');
        Route::get('/gatherRequests',[DashboardController::class,'gatherData'])->name('admin.settings.webhook.gather');
    });

    // routes/web.php
    Route::get('/download-template', function () {
        $filePath = public_path('downloads/template.xlsx');

        return response()->download($filePath, 'sms_template.xlsx', [
            'Content-Type' => 'application/vnd.ms-excel',
        ]);
    })->name('download.template');
});

require __DIR__.'/auth.php';