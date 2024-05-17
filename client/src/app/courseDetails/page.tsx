import "./courseDetails.css"
import "../examOnline/examOnline.css"
export default function CourseDetail()
{
    return(
        <div>
        <div className="flex__container flex__container-details">
          <div className="details__about">
            <div className="grid wide">
              <h2 className="details__header">
                Combo khoá học IELTS Intensive [Tặng khoá TED Talks]
              </h2>
              <a href="" className="details__tag">#Khóa học online</a>
              <div className="flex__container">
                <div className="details__rate">
                  <span className="rate">5</span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span className="details__text">(630 đánh giá)</span>
                <span className="details__text">38,171 học viên</span>
              </div>
              <div className="details__info">
                <p className="details__text">
                  <i className="fa-solid fa-circle-check details__icon"></i> Dành cho
                  các bạn từ band 4.0 trở lên.
                </p>
                <p className="details__text">
                  <i className="fa-solid fa-circle-check details__icon"></i> Sở hữu
                  trọn bộ 4 khoá học
                  <span className="details--italic"
                    >IELTS Intensive online: Listening - Reading - Writing -
                    Speaking</span
                  >
                </p>
                <p className="details__text">
                  <i className="fa-solid fa-circle-check details__icon"></i> Tặng kèm
                  khoá
                  <span className="details--underline"
                    >Luyện nghe nói tiếng Anh cùng Ted Talks</span
                  >
                  trị giá 599k
                </p>
                <p className="details__text">
                  <i className="fa-solid fa-circle-check details__icon"></i> Combo
                  khoá học có giá trị 12 tháng
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="details-under have--bg-color">
          <div className="grid wide">
            <div className="details__box-fixed hide-on-tablet">
              <img
                width="100%"
                height="150px"
                src="https://study4.com/media/courses/CourseSeries/files/2023/10/11/combo_intensive.webp"
                alt=""
                className="details__img"
              />
              <div className="details__price-box">
                <h2 className="details__endow">Ưu đãi đặc biệt tháng 5/2024:</h2>
                <div className="flex__container">
                  <h3 className="details__price-new">1.525.000đ</h3>
                  <div className="details__price-old-box">
                    <span className="details__price-old">Giá gốc: 3.596.000đ</span>
                    <span className="details__price-eco">Tiết kiệm: 2.071.000đ</span>
                    <span className="details__percent">(-57%)</span>
                  </div>
                </div>
                <a href="" className="details__btn details__btn-register"
                  >ĐĂNG KÝ HỌC NGAY</a
                >
                <a href="" className="details__btn details__btn-try"
                  >Học thử miễn phí</a
                >
              </div>
              <div className="details__price-box">
                <div className="details__ads">
                  <p className="details__ads-content">
                    <i className="fa-solid fa-users details__icon-under"></i> 38,171
                    học viên đã đăng ký
                  </p>
                  <p className="details__ads-content">
                    <i className="fa-solid fa-book-open details__icon-under"></i>
                    86 chủ đề, 809 bài học
                  </p>
                  <p className="details__ads-content">
                    <i className="fa-solid fa-pencil details__icon-under"></i>
                    1,970 bài tập thực hành
                  </p>
                  <p className="details__ads-content">
                    <i className="fa-solid fa-user-clock details__icon-under"></i>
                    Combo 4 khoá học có giá trị 12 tháng
                  </p>
                  <p className="details__ads-content">
                    <i className="fa-solid fa-house-laptop details__icon-under"></i>
  
                    Có thể học trên điện thoại và máy tính
                  </p>
                </div>
              </div>
              <div className="details__price-box">
                <p className="details__contact">
                  Chưa chắc chắn khoá học này dành cho bạn?
                </p>
                <a href="" className="details__link"
                  >Liên hệ để nhận tư vấn miễn phí!</a
                >
              </div>
            </div>
            <ul className="tag-search__transition">
              <li className="tag-search__transition-item">
                <a
                  href=""
                  className="tag-search__transition-link tag-search__transition-link--chosen"
                  >Mục tiêu khóa học</a
                >
              </li>
              <li className="tag-search__transition-item">
                <a href="" className="tag-search__transition-link"
                  >Thông tin khóa học</a
                >
              </li>
              <li className="tag-search__transition-item">
                <a href="" className="tag-search__transition-link"
                  >Chương trình học</a
                >
              </li>
              <li className="tag-search__transition-item">
                <a href="" className="tag-search__transition-link">Đánh giá (630)</a>
              </li>
            </ul>
            <div className="row container__details">
              <div className="details__content-left col l-8 m-6 c-12">
                <div className="details__box-content">
                  <h2 className="details__box-header">
                    Bạn sẽ đạt được gì sau khoá học?
                  </h2>
                  <p className="details__box-text">
                    1️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                  <p className="details__box-text">
                    2️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                  <p className="details__box-text">
                    3️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                  <p className="details__box-text">
                    4️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                </div>
                <div className="details__box-content">
                  <h2 className="details__box-header">
                    Bạn sẽ đạt được gì sau khoá học?
                  </h2>
                  <p className="details__box-text">
                    1️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                  <p className="details__box-text">
                    2️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                  <p className="details__box-text">
                    3️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                  <p className="details__box-text">
                    4️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                </div>
                <div className="details__box-content">
                  <h2 className="details__box-header">
                    Bạn sẽ đạt được gì sau khoá học?
                  </h2>
                  <p className="details__box-text">
                    1️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                  <p className="details__box-text">
                    2️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                  <p className="details__box-text">
                    3️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                  <p className="details__box-text">
                    4️⃣Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General
                    Training
                  </p>
                </div>
              </div>
              <div
                className="details__content-right col l-4 m-6 c-12 hide-on-mobile hide"
              >
                <div className="details__box-fixed">
                  <img
                    width="100%"
                    height="150px"
                    src="https://study4.com/media/courses/CourseSeries/files/2023/10/11/combo_intensive.webp"
                    alt=""
                    className="details__img"
                  />
                  <div className="details__price-box">
                    <h2 className="details__endow">Ưu đãi đặc biệt tháng 5/2024:</h2>
                    <div className="flex__container">
                      <h3 className="details__price-new">1.525.000đ</h3>
                      <div className="details__price-old-box">
                        <span className="details__price-old"
                          >Giá gốc: 3.596.000đ</span
                        >
                        <span className="details__price-eco"
                          >Tiết kiệm: 2.071.000đ</span
                        >
                        <span className="details__percent">(-57%)</span>
                      </div>
                    </div>
                    <a href="" className="details__btn details__btn-register"
                      >ĐĂNG KÝ HỌC NGAY</a
                    >
                    <a href="" className="details__btn details__btn-try"
                      >Học thử miễn phí</a
                    >
                  </div>
                  <div className="details__price-box">
                    <div className="details__ads">
                      <p className="details__ads-content">
                        <i className="fa-solid fa-users details__icon-under"></i>
                        38,171 học viên đã đăng ký
                      </p>
                      <p className="details__ads-content">
                        <i className="fa-solid fa-book-open details__icon-under"></i>
                        86 chủ đề, 809 bài học
                      </p>
                      <p className="details__ads-content">
                        <i className="fa-solid fa-pencil details__icon-under"></i>
                        1,970 bài tập thực hành
                      </p>
                      <p className="details__ads-content">
                        <i className="fa-solid fa-user-clock details__icon-under"></i>
                        Combo 4 khoá học có giá trị 12 tháng
                      </p>
                      <p className="details__ads-content">
                        <i
                          className="fa-solid fa-house-laptop details__icon-under"
                        ></i>
  
                        Có thể học trên điện thoại và máy tính
                      </p>
                    </div>
                  </div>
                  <div className="details__price-box">
                    <p className="details__contact">
                      Chưa chắc chắn khoá học này dành cho bạn?
                    </p>
                    <a href="" className="details__link"
                      >Liên hệ để nhận tư vấn miễn phí!</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}