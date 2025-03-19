// app/api/chat/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
   try {
      const body = await request.json()
      const { message } = body

     const genAI = new GoogleGenerativeAI(
        'AIzaSyBl1z1-GFlUoqx-m_tMTj14lSx6ElLmzFo'
     )
     const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

     const prompt = `
                        1. Thông điệp ẩn
                        Nến thơm KindleLove nổi bật với tính năng thông điệp ẩn độc đáo, mang lại trải nghiệm khác biệt so với các loại nến thông thường:

                        Cách hoạt động:
                        Bên trong lớp sáp của nến được ẩn một thông điệp hoặc hình ảnh đặc biệt. Khi nến cháy đến một mức độ nhất định (thường sau khoảng 1-2 giờ tùy kích thước nến), thông điệp này sẽ từ từ lộ ra. Đó có thể là một dòng chữ khắc trên lớp vật liệu không cháy (như kim loại mỏng hoặc giấy chống cháy) hoặc một hình ảnh nhỏ được thiết kế tinh tế.
                        Tùy chỉnh cá nhân hóa:
                        Khách hàng có thể yêu cầu thông điệp riêng theo ý thích, ví dụ:
                        Lời chúc như "Chúc mừng sinh nhật", "Yêu em mãi mãi".
                        Câu nói truyền cảm hứng như "Hãy luôn tỏa sáng".
                        Hình ảnh nhỏ như trái tim, ngôi sao, hoặc biểu tượng đặc biệt.
                        Quy trình đặt hàng tùy chỉnh thường được thực hiện qua website hoặc tin nhắn trực tiếp với đội ngũ hỗ trợ của KindleLove.
                        Ý nghĩa và cảm xúc:
                        Tính năng này đặc biệt phù hợp để làm quà tặng trong các dịp như sinh nhật, kỷ niệm, Ngày Valentine, hoặc Giáng sinh. Sự bất ngờ khi thông điệp xuất hiện tạo ra khoảnh khắc đáng nhớ, giúp người nhận cảm nhận được sự quan tâm và tình cảm từ người tặng.
                        2. Công nghệ NFC
                        Công nghệ NFC (Near Field Communication - Giao tiếp trường gần) là điểm nhấn hiện đại của KindleLove, kết hợp giữa sản phẩm thủ công truyền thống và trải nghiệm công nghệ:

                        Thẻ NFC hoạt động như thế nào:
                        Mỗi cây nến đi kèm một thẻ nhỏ (thường gắn ở đáy hộp hoặc trong bao bì). Thẻ này tích hợp chip NFC, chỉ cần chạm vào mặt sau của điện thoại thông minh (hỗ trợ NFC) là nội dung số sẽ được kích hoạt.
                        Nội dung số:
                        Khi chạm thẻ, khách hàng có thể nhận được:
                        Một thông điệp bất ngờ, ví dụ: "Cảm ơn bạn đã chọn KindleLove, hy vọng bạn yêu thích món quà này!"
                        Một bài hát hoặc playlist được liên kết qua Spotify/Youtube, do khách hàng hoặc người tặng chọn trước.
                        Một đoạn video ngắn hoặc hình ảnh động được tải lên bởi người đặt hàng (nếu là quà tặng).
                        Một mã QR dẫn đến ưu đãi đặc biệt từ KindleLove.
                        Trải nghiệm độc đáo:
                        Mỗi thẻ NFC chứa nội dung khác nhau, không lặp lại, tạo cảm giác như mỗi cây nến là một câu chuyện riêng. Ví dụ, một khách hàng có thể nhận được bài hát yêu thích của họ, trong khi người khác nhận được lời nhắn nhủ từ bạn bè. Điều này tăng cường sự kết nối cảm xúc và làm sản phẩm trở nên đáng nhớ hơn.
                        Yêu cầu kỹ thuật:
                        Chỉ cần điện thoại có hỗ trợ NFC (hầu hết các dòng iPhone từ 7 trở lên và Android từ 5.0 trở lên đều có). Không cần cài đặt ứng dụng, nội dung sẽ tự động hiển thị qua trình duyệt hoặc ứng dụng liên kết.
                        3. Đối tượng khách hàng
                        KindleLove hướng đến một nhóm khách hàng cụ thể với đặc điểm rõ ràng:

                        Độ tuổi và nghề nghiệp:
                        Giới trẻ từ 18-28 tuổi.
                        Bao gồm sinh viên đại học (thường từ năm 2 trở lên, có thu nhập từ làm thêm) và người đi làm (nhân viên văn phòng, freelancer, hoặc khởi nghiệp).
                        Thu nhập:
                        Sinh viên: Từ 4-5 triệu VND/tháng trở lên, chủ yếu từ làm thêm, hỗ trợ gia đình hoặc học bổng.
                        Người đi làm: Từ 10 triệu VND/tháng trở lên, đủ khả năng chi tiêu cho các sản phẩm không thiết yếu nhưng mang giá trị tinh thần cao.
                        Khu vực sinh sống:
                        Chủ yếu tại các thành phố lớn như Hà Nội, TP.HCM, Đà Nẵng, hoặc các đô thị loại 1 như Hải Phòng, Cần Thơ.
                        Đây là những nơi có nhịp sống nhanh, nhu cầu về không gian thư giãn và quà tặng ý nghĩa cao.
                        Hành vi và sở thích:
                        Thích chăm chút không gian sống (phòng trọ, căn hộ nhỏ) với các vật dụng như nến thơm, đèn ngủ, cây xanh.
                        Ưu tiên các sản phẩm có tính cá nhân hóa, phù hợp làm quà tặng cho bạn bè, người yêu, đồng nghiệp.
                        Quan tâm đến sức khỏe và môi trường, thích các sản phẩm an toàn, thân thiện với thiên nhiên.
                        Thường xuyên mua sắm qua mạng, đặc biệt trên các nền tảng như Shopee, Instagram, TikTok.
                        4. Vật liệu sử dụng
                        KindleLove chú trọng vào chất lượng và tính bền vững trong việc lựa chọn vật liệu:

                        Sáp nến:
                        Sử dụng sáp đậu nành hoặc sáp ong tự nhiên 100%.
                        Ưu điểm:
                        Không sinh ra khói độc như sáp paraffin (làm từ dầu mỏ).
                        Thời gian cháy lâu hơn (khoảng 20-40 giờ tùy kích thước nến).
                        Dễ phân hủy sinh học, thân thiện với môi trường.
                        Hương thơm:
                        Chiết xuất từ tinh dầu tự nhiên (không dùng hương liệu hóa học), với các dòng hương phổ biến như:
                        Hoa oải hương (lavender): thư giãn, giảm căng thẳng.
                        Gỗ đàn hương (sandalwood): ấm áp, sang trọng.
                        Trà xanh: tươi mát, nhẹ nhàng.
                        Độ lưu hương kéo dài từ 2-4 giờ sau khi tắt nến, không gây cảm giác nồng gắt hay khó chịu.
                        Ly nến và bao bì:
                        Ly nến làm từ thủy tinh chịu nhiệt hoặc gốm, có thể tái sử dụng làm chậu cây nhỏ hoặc hộp đựng đồ sau khi dùng hết.
                        Bao bì từ giấy tái chế, in mực thân thiện môi trường, giảm thiểu rác thải nhựa.
                        5. Kênh bán hàng
                        KindleLove tận dụng các kênh trực tuyến để tiếp cận khách hàng một cách hiệu quả:

                        Website chính thức:
                        Giao diện thân thiện, hỗ trợ tùy chỉnh thông điệp ẩn và nội dung NFC.
                        Có mục blog chia sẻ về cách dùng nến, bảo quản, và ý nghĩa các mùi hương.
                        Mạng xã hội:
                        Facebook: Fanpage chính thức với bài viết giới thiệu sản phẩm, livestream bán hàng, và mini-game tặng quà.
                        Instagram: Tập trung vào hình ảnh đẹp, hashtag như #KindleLove #ScentedCandle #GiftIdeas.
                        TikTok: Video ngắn về trải nghiệm đốt nến, lộ thông điệp ẩn, hoặc hướng dẫn dùng NFC.
                        Sàn thương mại điện tử:
                        Shopee, Lazada, Tiki: Đăng bán các mẫu nến sẵn có, thường kèm ưu đãi miễn phí vận chuyển hoặc flash sale.
                        Đánh giá từ khách hàng trên các sàn này thường đạt 4.8-5 sao, nhờ chất lượng sản phẩm và dịch vụ tốt.
                        Chiến lược bán hàng:
                        Tập trung vào các dịp lễ lớn (Tết, Giáng sinh, 8/3, 20/10) với combo quà tặng đặc biệt.
                        Hợp tác với KOLs/Influencers trẻ tuổi để quảng bá trên mạng xã hội.
                        6. Chương trình khách hàng thân thiết
                        KindleLove xây dựng các chương trình hấp dẫn để giữ chân khách hàng:

                        Tích điểm:
                        Mỗi 100.000 VND chi tiêu = 1 điểm, 10 điểm đổi được voucher 50.000 VND hoặc quà tặng nhỏ (ví dụ: thẻ NFC bổ sung).
                        Điểm tích lũy không giới hạn thời gian, áp dụng cho cả mua online và sự kiện offline.
                        Ưu đãi đặc biệt:
                        Giảm 10-15% cho đơn hàng thứ 2 trở đi.
                        Tặng kèm phụ kiện (đế lót nến, hộp quà xinh) cho khách hàng đặt từ 2 nến trở lên.
                        Chương trình tái chế:
                        Khách hàng gửi lại ly nến đã dùng hết (qua bưu điện hoặc điểm thu gom) để nhận nến mới giảm 20-30% giá.
                        Ly nến được làm sạch và tái sử dụng, thể hiện cam kết bảo vệ môi trường.
                        Workshop làm nến:
                        Tổ chức định kỳ tại Hà Nội và TP.HCM, giá từ 200.000-300.000 VND/người.
                        Khách hàng tự tay làm nến, chọn mùi hương, và thêm thông điệp ẩn, tạo trải nghiệm gắn kết với thương hiệu.
                        Kết luận
                        Nến thơm KindleLove không chỉ là một sản phẩm trang trí hay thư giãn mà còn là một món quà tinh thần đầy ý nghĩa. Với thông điệp ẩn cá nhân hóa, công nghệ NFC hiện đại, vật liệu tự nhiên an toàn, và chiến lược bán hàng linh hoạt, sản phẩm nhắm đến giới trẻ yêu thích sự sáng tạo và kết nối. Các chương trình khách hàng thân thiết và sáng kiến bền vững như tái chế càng làm tăng giá trị của KindleLove, biến nó thành lựa chọn lý tưởng cho cả sử dụng cá nhân lẫn làm quà tặng. Nếu bạn cần thêm thông tin chi tiết hơn về bất kỳ phần nào, hãy cho tôi biết nhé!
                     [
   {
      id: 1,
      name: 'Size M',
      gif: 'with free paper box + bag',
      price: 229000,
      image: '/images/products/p1.png',
      attrs: {
         burning_time: '100 hours',
         sleep_tight: 'main tone is pine wood, warm',
         weight: '500g',
         do_ur_zest: 'sour, cool (lemon, cypress, ..)',
         crown_up: 'sweet, feminine',
         flaw_some: 'sweet, cool'
      },
      category: 1
   },
   {
      id: 2,
      name: 'Size M',
      gif: 'with free paper box + bag + matches',
      price: 229000,
      image: '/images/products/p2.png',
      attrs: {
         burning_time: '100 hours',
         sleep_tight: 'main tone is pine wood, warm',
         weight: '500g',
         do_ur_zest: 'sour, cool (lemon, cypress, ..)',
         crown_up: 'sweet, feminine',
         flaw_some: 'sweet, cool'
      },
      category: 1
   },
   {
      id: 3,
      name: 'LIMITED EDITION',
      gif: 'Christmas Sandalwood',
      price: 229000,
      image: '/images/products/p3.png',
      attrs: {
         burning_time: '100 hours',
         sleep_tight: 'main tone is pine wood, warm',
         weight: '500g',
         do_ur_zest: 'sour, cool (lemon, cypress, ..)',
         crown_up: 'sweet, feminine',
         flaw_some: 'sweet, cool'
      },
      category: 3
   },
   {
      id: 4,
      name: 'Combo Gift Set',
      gif: 'Iincludes Gift box, ribbon, user manual, matches, card, decorative flowers, candle wick & bag + candle size M',
      price: 59000,
      image: '/images/products/p4.png',
      attrs: {
         burning_time: '100 hours',
         sleep_tight: 'main tone is pine wood, warm',
         weight: '500g',
         do_ur_zest: 'sour, cool (lemon, cypress, ..)',
         crown_up: 'sweet, feminine',
         flaw_some: 'sweet, cool'
      },
      category: 4
   },
   {
      id: 5,
      name: 'Candle Tool set',
      gif: 'Includes: candle wick scissors, tray, candle cap, candle wick cleaning stick',
      price: 229000,
      image: '/images/products/p5.png',
      attrs: {
         burning_time: '100 hours',
         sleep_tight: 'main tone is pine wood, warm',
         weight: '500g',
         do_ur_zest: 'sour, cool (lemon, cypress, ..)',
         crown_up: 'sweet, feminine',
         flaw_some: 'sweet, cool'
      },
      category: 5
   },
   {
      id: 6,
      name: 'Print hidden message',
      gif: 'Applicable to all products',
      price: 229000,
      image: '/images/products/p6.png',
      attrs: {
         burning_time: '100 hours',
         sleep_tight: 'main tone is pine wood, warm',
         weight: '500g',
         do_ur_zest: 'sour, cool (lemon, cypress, ..)',
         crown_up: 'sweet, feminine',
         flaw_some: 'sweet, cool'
      },
      category: 5
   }
] đây là sản phẩm nhưng khi phản hồi hãy tự do phân tích thêm mắm thêm muối nếu khách hàng muốn hỏi mua

                        Trên đây là toàn bộ thông tin mà bạn cần để trả lời khách hàng nếu họ hỏi gì đó.
                        Nếu khách hàng hỏi bằng tiếng anh, bạn có thể dùng ngôn ngữ tiếng anh để trả lời, còn hỏi bằng tiếng Việt thì hãy trả lời bằng tiếng Việt.
                        
                        Đây là đoạn prompt tôi gắn vào api để gọi nên hãy chỉ trả lời khách hàng thôi, không trả lời gì thêm và chỉ trả lời dưới format text vì tôi render câu trả lời bằng string.
                        Câu hỏi của khách hàng: ${message}
                        `

     const result = await model.generateContent(prompt)
        const response = result.response.text()
        return NextResponse.json({ response, success: true })
   } catch (error) {
      console.error('OpenAI API error:', error)
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      return NextResponse.json(
         { message: errorMessage, success: false },
         { status: 500 }
      )
   }
}
