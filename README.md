# react-meteor-jquery (/public/imgs show all structure folders)
Cấu trúc cây thư mục project:
--client: chứa các file cần thiết cho cấu hinh client, redux, apollo (config start client meteor)
--collections: chứa khai báo các bảng trong mongodb (Code back-end)
--imports
        --actions: chứa tất cả các actions của redux
        --components: chứa tất cả các component React (font-end viết tạo các components react), back-end phối hợp để render dữ liệu
                      chú ý: nguyên tắt chia để trị (dễ quản lý code, fix bugs, tái sử dụng) -> tạo folder chứa -> tạo files con có liên quan (chia theo chức năng)
        --containers: chứa tất cả các câu truy vấn sử lý back-end (back-end code)
                      chú ý: tạo file có liên quan đến các component trong folder components(font-end)
        --data: chứa các hàm truy vấn, xử lý dưới server thông qua graphql
        --reducers: chứa các hàm xử lý trong redux khi các actions trong ./actions gửi tới trả kết quả cho client
        --apollo-client.js: file cấu hình kết nối apollo giữa client và server
        --config.js: chứa các hàm cấu hình địa chỉ
        --routers.js: chứa tất cả cấu hình router của project
        --store.js: cấu hình store để kết nới redux action và reducers
--locales: folder chứa dữ liệu đa ngôn ngữ
          chú ý: tạo thư mục theo mã quốc gia: vi, eng.....
--public
        --fonts: chứa các fonts của project
        --imgs: chứa file ảnh, icon
        --sounds: chứa file âm thanh
--server: folder server của meteor
--stylesheets: chứa tất cả các file css, scss

run project:
step1: open comman line: git clone 
step2: cd folder project: meteor npm install
step3: meteor
step4: open browser: localhost: 3000
