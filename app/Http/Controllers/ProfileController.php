<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Cloudinary;
// use Cloudinary\Api\Upload\UploadApi;
// use Cloudinary\Uploader;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        // if (!empty($request->file('image_path'))) {
        //     $image_url = Cloudinary::upload($request->file('image_path')->getRealPath())->getSecurePath();
        //         $image = $request->file('image_path');
        //         $upload_api = new UploadApi();
        //         $image_url = $upload_api->upload($request['image_path']);
        //         $image_url = Cloudinary\Uploader::upload($image->getPathname())['secure_url'];
        //     dd($image_url);
        //     $request->user()->image_path = $image_url;
        // }
        
        // if ($request->has('image_path')) {
            // $image = $request->files->get('file');
            // $file_path = $image->getRealPath();
            // $cloudinary = new Cloudinary();
            // $image_url = $cloudinary->uploadApi()->upload($file_path)->getSecurePath();
            
            // $image_url = Cloudinary::upload($request->file('image_path')->getRealPath())->getSecurePath();
            // $image_url = Cloudinary::upload($request->file($request['image_path'])->getRealPath())->getSecurePath();
            
            // $image = $request->file('image_path');
            // $upload_api = new UploadApi();
            // $image_url = $upload_api->upload($request['image_path']);
            // $image_url = Cloudinary\Uploader::upload($image->getPathname())['secure_url'];
            // dd($image_url);
        //     $request->user()->image_path = $image_url;
        // }

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->fill($request->validated());

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
