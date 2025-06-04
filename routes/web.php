<?php

use App\Http\Controllers\Admin\DashboardController;
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
    Route::get('/recipients',[RecipientsController::class,'index'])->name('admin.recipients');

    Route::post('/recipients/add-contacts',[RecipientsController::class,'storeNewContacts'])->name('admin.contacts.add');
    Route::post('/to-recipients-send',[SendMessageController::class,'sendTestSms'])->name('admin.message.send');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/template/save-template',[SendMessageController::class,'saveTemplate'])->name('admin.template.save');

});

require __DIR__.'/auth.php';