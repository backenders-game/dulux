<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Labels Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used in labels throughout the system.
    | Regardless where it is placed, a label can be listed here so it is easily
    | found in a intuitive way.
    |
    */

    'general' => [
        'stt' => 'STT',
        'all'     => 'Tất cả',
        'yes'     => 'Có',
        'no'      => 'Không',
        'copyright' => 'Bản quyền',
        'custom'  => 'Tùy chọn',
        'actions' => 'Hoạt động',
        'active'  => 'Kích hoạt',
        'buttons' => [
            'save'   => 'Lưu lại',
            'update' => 'Cập nhật',
        ],
        'hide'              => 'Ẩn đi',
        'inactive'          => 'Vô hiệu hóa',
        'show'              => 'Xem',
        'toggle_navigation' => 'Chuyển hướng',
        'create_new'        => 'Tạo mới',
        'toolbar_btn_groups' => 'Thanh công cụ với nhóm các nút bấm',
        'more'              => 'Xem thêm',
        'none'              => 'Không có gì',
    ],

    'backend' => [
        'access' => [
            'roles' => [
                'create'     => 'Tạo nhóm người dùng',
                'edit'       => 'Chỉnh sửa nhóm',
                'management' => 'QL Nhóm người dùng',

                'table' => [
                    'number_of_users' => 'Số tài khoản',
                    'permissions'     => 'Quyền truy cập',
                    'role'            => 'Têm nhóm',
                    'sort'            => 'Sắp xếp',
                    'total'           => 'Tổng số nhốm|Tổng số các nhóm',
                ],
            ],

            'users' => [
                'active'              => 'Kích hoạt tài khoản',
                'all_permissions'     => 'Tất cả các quyền truy cập',
                'change_password'     => 'Đổi mật khẩu',
                'change_password_for' => 'Đổi mẩu khẩu cho :user',
                'create'              => 'Tạo tài khoản',
                'deactivated'         => 'Cấc tài khoản bị vô hiệu hóa',
                'deleted'             => 'Những tài khoản đã bị xóa',
                'edit'                => 'Chỉnh sửa tài khoản',
                'management'          => 'Q.Lý tài khoản',
                'no_permissions'      => 'Không có quyền truy cập',
                'no_roles'            => 'Không có nhóm người dùng.',
                'permissions'         => 'Các quyền truy cập',
                'user_actions'        => 'Hành động của người dùng',

                'table' => [
                    'confirmed'      => 'Đã xác nhận',
                    'created'        => 'Đã tạo',
                    'email'          => 'E-mail',
                    'id'             => 'ID',
                    'last_updated'   => 'Cập nhật lần cuối',
                    'name'           => 'Tên người dùng',
                    'first_name'     => 'Tên',
                    'last_name'      => 'Họ',
                    'no_deactivated' => 'Không có tài khoản bị vô hiệu hóa',
                    'no_deleted'     => 'Không có tài khoản bị xóa',
                    'other_permissions' => 'Quyền truy cập khác',
                    'permissions'    => 'Các quyền truy cập',
                    'abilities'      => 'Khả năng',
                    'roles'          => 'Nhóm',
                    'social'         => 'Tài khoản liên kết',
                    'total'          => 'Tổng tài khoản|Tổng các tài khoản',
                ],

                'tabs' => [
                    'titles' => [
                        'overview' => 'Tổng quan',
                        'history'  => 'Lịch sử',
                    ],

                    'content' => [
                        'overview' => [
                            'avatar'       => 'ảnh đại diện',
                            'confirmed'    => 'Đã xác nhận',
                            'created_at'   => 'Đã tạo lúc',
                            'deleted_at'   => 'Đã xóa lúc',
                            'email'        => 'E-mail',
                            'last_login_at' => 'Lần đăng nhập cuối',
                            'last_login_ip' => 'Địa chỉ IP đăng nhập cuối',
                            'last_updated' => 'Lần cập nhật cuối',
                            'name'         => 'Tên',
                            'first_name'   => 'Tên',
                            'last_name'    => 'Họ',
                            'status'       => 'Trạng thái',
                            'timezone'     => 'Múi giờ',
                        ],
                    ],
                ],

                'view' => 'Xem tài khoản',
            ],
        ],
        'colorgroups' => [
            'management' => 'QL các họ màu',
            'create' => 'Tạo nhóm màu',
            'table' => [
                'no' => 'STT',
                'name' => 'Nhóm màu',
                'color' => 'Màu hiển thị',
                'total' => 'Tổng nhóm màu|Tổng các nhóm màu',
                'created_at' => 'Ngày tạo',
                'updated_at' => 'Ngày cập nhật'
            ]
        ],
        'colors' => [
            'table' => [
                'name' => 'Tên màu',
                'color' => 'Hiển thị'
            ]
        ],
        'categories' => [
            'table' => [
                'name' => 'Tên phân loại',
                'type' => 'Kiểu phân loại',
            ]
        ],
        'products' => [
            'management' => 'QL Sản phẩm',
            'create' => 'Thêm Sản phẩm mới',
            'edit' => 'Chỉnh sửa T.tin sản phẩm',
            'table' => [
                'no' => 'STT',
                'image' => 'Hình SP',
                'name' => 'Tên SP',
                'properties' => 'Đặc tính',
                'category' => 'Phân loại',
                'basic_info' => 'Thông tin chung',
                'created_at' => 'Ngày tạo',
                'updated_at' => 'Ngày cập nhật'
            ]
        ]
    ],

    'frontend' => [

        'auth' => [
            'login_box_title'    => 'Đăng nhập',
            'login_button'       => 'Đăng nhập',
            'login_with'         => 'Đăng nhập với :social_media',
            'register_box_title' => 'Đăng ký tài khoản',
            'register_button'    => 'Đăng ký',
            'remember_me'        => 'Ghi nhớ tài khoản',
        ],

        'contact' => [
            'box_title' => 'Contact Us',
            'button' => 'Send Information',
        ],

        'passwords' => [
            'expired_password_box_title' => 'Your password has expired.',
            'forgot_password'                 => 'Forgot Your Password?',
            'reset_password_box_title'        => 'Reset Password',
            'reset_password_button'           => 'Reset Password',
            'update_password_button'           => 'Update Password',
            'send_password_reset_link_button' => 'Send Password Reset Link',
        ],

        'user' => [
            'passwords' => [
                'change' => 'Change Password',
            ],

            'profile' => [
                'avatar'             => 'Avatar',
                'created_at'         => 'Created At',
                'edit_information'   => 'Edit Information',
                'email'              => 'E-mail',
                'last_updated'       => 'Last Updated',
                'name'               => 'Name',
                'first_name'         => 'First Name',
                'last_name'          => 'Last Name',
                'update_information' => 'Update Information',
            ],
        ],

    ],
];
