<?php

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;
use App\Models\FinishSurface;
use Carbon\Carbon;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now()->toDateTimeString();
        $son = Category::where('name', 'Sơn')->where('type', 0)->first();
        $spPhu = Category::where('name', 'Sản phẩm phụ trợ')
            ->where('type', 0)->first();
        $bematBong = FinishSurface::where('name', 'Bề mặt Bóng')->first();
        $bematBongMo = FinishSurface::where('name', 'Bề mặt Bống Mờ')->first();
        $bematMo = FinishSurface::where('name', 'Bề mặt Mờ')->first();
        $beMatNA = FinishSurface::where('name', 'NA')->first();
        if ($beMatNA && $bematBong && $bematBongMo && $bematMo) {
            $pid1 = Product::insertGetId([
                'name' => 'Dulux Weathershield Powerflexx',
                'category_id' => $son->id,
                'img_path' => 'uploads/img/products/product1.png',
                'finish_surface_id' => $bematBongMo->id,
                'description' => 'Chống rạn nứt - Chống thấm vượt trội',
                'introduction' => 'Dulux Weathershield Powerflexx mới là sơn ngoại thất siêu cao cấp, với màng sơn co giãn gấp 3 lần giúp chống rạn nứt & chống thấm vượt trội.',
                'user_manual' => '',
                'construction_guide' => 'Điều kiện thi công: Độ ẩm của bề mặt dưới 16% theo máy đo độ ẩm Protimeter hay để bề mặt tường khô từ 21 đến 28 ngày trong điều kiện bình thường (nhiệt độ trung bình 30 độ C, độ ẩm môi trường 80%). Không sơn nếu nhiệt độ thời tiết dưới 10 độ C. Bảo đảm bề mặt sơn phải sạch, khô, không có tạp chất làm giảm độ bám dính như bụi, dầu mỡ hay sáp. Dùng hóa chất thích hợp để xử lý bề mặt có rêu mốc. Đối với bề mặt cũ bị phấn hóa, cần loại bỏ màng sơn cũ bằng dụng cụ thích hợp trước khi thi công. Xử lý triệt để các vết nứt tường trước khi thi công.',
                'protection_info' => 'Việc xả nhám khô, cắt và/hoặc hàn màng sơn khô bằng khí ga sẽ tạo bụi và/hoặc khói độc. Nên xả nhám ướt nếu có thể. Nếu điều kiện làm việc tại chỗ không thông thoáng để tránh tiếp xúc với khói độc, nên sử dụng thiết bị bảo vệ đường hô hấp thích hợp • Chỉ sử dụng ở nơi thông thoáng. Tránh hít bụi sơn • Tránh tiếp xúc với da hoặc mắt • Mang găng tay, khẩu trang và kính bảo vệ mắt thích hợp khi thi công • Khi bị dính sơn vào mắt, lập tức rửa mắt với nhiều nước sạch và đến gặp bác sĩ ngay • Nếu nuốt phải, đến gặp bác sĩ ngay và mang theo thùng sơn hoặc nhãn sản phẩm • Để xa tầm tay trẻ em • Không tái sử dụng thùng sơn để chứa thực phẩm hay đồ uống • Lấy lại lượng sơn còn dư trên cọ hoặc rulô càng nhiều càng tốt trước khi rửa • Không đổ sơn vào cống rãnh hay nguồn nước. Tránh thải sơn ra môi trường. Nên tham khảo hướng dẫn đặc biệt/ thông tin an toàn sản phẩm • Độc đối với sinh vật sống dưới nước. Có thể gây tác hại lâu dài đối với môi trường nước • Khi bị đổ sơn, thu gom bằng đất hoặc cát. Tất cả các vật liệu thải bỏ và thùng chứa, phải được xử lý theo quy định hiện hành của nước sở tại ',
                'coverage' => 13,
                'drying_time' => 'Khô bề mặt 30 phút',
                'num_layer' => 2,
                'created_at' => $now,
                'updated_at' => $now,

            ]);
        }

    }
}
