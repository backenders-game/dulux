<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Alert Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain alert messages for various scenarios
    | during CRUD operations. You are free to modify these language lines
    | according to your application's requirements.
    |
    */

    'backend' => [
        'roles' => [
            'created' => 'Nhóm người dùng đã được tạo thành công!',
            'deleted' => 'Nhóm người dùng đã được xóa thành công!',
            'updated' => 'Nhóm người dùng đã được cập nhật thành công!',
        ],

        'users' => [
            'cant_resend_confirmation' => 'The application is currently set to manually approve users.',
            'confirmation_email'  => 'Một e-mail xác nhận tài khoản vừa được gửi đến địa chỉ email đã đăng ký.',
            'confirmed'              => 'Tài khoản của bạn vừa được xác nhận!',
            'created'             => 'Tài khoản đã được tạo thành công!',
            'deleted'             => 'Tài khoản đã được xóa!',
            'deleted_permanently' => 'The user was deleted permanently.',
            'restored'            => 'Tài khoản bị xóa đã được khôi phục.',
            'session_cleared'      => "Phiên làm việc của tài khoản đã được làm mới.",
            'social_deleted' => 'Tài khoản mạng xã hội đã được loại bỏ.',
            'unconfirmed' => 'Tài khoản đã không được xác nhận.',
            'updated'             => 'Tài khoản đã được cập nhật thành công.',
            'updated_password'    => "Mật khẩu của tài khoản đã được đổi thành công.",
        ],
    ],

    'frontend' => [
        'contact' => [
            'sent' => 'Thông tin của bạn đã được gửi. Chúng tôi sẽ trả lời ngay khi có thể.',
        ],
    ],
];
