<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Menus Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used in menu items throughout the system.
    | Regardless where it is placed, a menu item can be listed here so it is easily
    | found in a intuitive way.
    |
    */

    'backend' => [
        'access' => [
            'title' => 'QL Truy cập',

            'roles' => [
                'all'        => 'Các nhóm người dùng',
                'create'     => 'Tạo nhóm người dùng',
                'edit'       => 'Chỉnh sửa nhóm',
                'management' => 'Quản lý nhóm người dùng',
                'main'       => 'Nhóm người dùng',
            ],

            'users' => [
                'all'             => 'Tất cả tài khoản',
                'change-password' => 'Đổi mật khẩu',
                'create'          => 'Tạo tài khoản',
                'deactivated'     => 'Các tài khoản bị vô hiệu hóa',
                'deleted'         => 'Các tài khoản đã xóa.',
                'edit'            => 'Chỉnh sửa tài khoản',
                'main'            => 'Tài khoản',
                'view'            => 'Xem tài khoản',
            ],
        ],

        'log-viewer' => [
            'main'      => 'Log hệ thống',
            'dashboard' => 'Thống kê',
            'logs'      => 'Các ghi chép',
        ],

        'sidebar' => [
            'dashboard' => 'Tổng quát',
            'general'   => 'Thông thường',
            'history'   => 'Lịch sử',
            'system'    => 'Hệ thống',
        ],
    ],

    'language-picker' => [
        'language' => 'Language',
        /*
         * Add the new language to this array.
         * The key should have the same language code as the folder name.
         * The string should be: 'Language-name-in-your-own-language (Language-name-in-English)'.
         * Be sure to add the new language in alphabetical order.
         */
        'langs' => [
            'en'    => 'English',
            'vi' => 'Tiếng Việt'
        ],
    ],
];
