import "./profile.css"
export default function Profile()
{
    return(
        <div className="grid wide">
        <div className="img__container">
          <div className="avatar__container">
            <img
              src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg"
              width="100%"
              height="120px"
              alt=""
              className="backgroud__avt"
            />
            <img
              width="100px"
              height="100px"
              src="https://static.vecteezy.com/system/resources/previews/030/504/836/non_2x/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg"
              alt=""
              className="avt__user"
            />
            <a href="" className="avatar__change"
              ><i className="fa-solid fa-pencil avatar__icon"></i
            ></a>
          </div>
        </div>
        <div className="user__name-container">
          <h1 className="name__user">thaigiabao122</h1>
          <a href="" className="user__public">Trang công khai</a>
        </div>
        <ul className="tag-search__transition">
          <li className="tag-search__transition-item">
            <a
              href=""
              className="tag-search__transition-link tag-search__transition-link--chosen"
              >Khóa học</a
            >
          </li>
          <li className="tag-search__transition-item">
            <a href="" className="tag-search__transition-link">Kết quả luyện thi</a>
          </li>
          <li className="tag-search__transition-item">
            <a href="" className="tag-search__transition-link">Posts</a>
          </li>
        </ul>
        <div className="course__registed-container">
          <p style={{display:'none'}} className="course__registed--dont-have-course">
            Bạn chưa đăng ký học khoá học nào!
          </p>
          <h3 className="course__registed-header">Các khóa đã kích hoạt</h3>
          <div className="course__active-container row">
            <a href="" className="couse__active-link col l-3 m-6 c-12">
              <div className="course__active-box">
                <h4 className="course__active-title">Complete TOEIC</h4>
                <p className="course__active-state">Đã kích hoạt</p>
                <p className="course__active-percent">17%</p>
                <div className="course__active-progress"></div>
                <p className="course__active-continue">
                  <span className="course__active-continue-title"
                    >Tiếp tục bài học: </span
                  >Từ vựng TOEIC - List 10
                </p>
              </div>
            </a>
            <a href="" className="couse__active-link col l-3 m-6 c-12">
              <div className="course__active-box">
                <h4 className="course__active-title">Complete TOEIC</h4>
                <p className="course__active-state">Đã kích hoạt</p>
                <p className="course__active-percent">17%</p>
                <div className="course__active-progress"></div>
                <p className="course__active-continue">
                  <span className="course__active-continue-title"
                    >Tiếp tục bài học: </span
                  >Từ vựng TOEIC - List 10
                </p>
              </div>
            </a>
            <a href="" className="couse__active-link col l-3 m-6 c-12">
              <div className="course__active-box">
                <h4 className="course__active-title">Complete TOEIC</h4>
                <p className="course__active-state">Đã kích hoạt</p>
                <p className="course__active-percent">17%</p>
                <div className="course__active-progress"></div>
                <p className="course__active-continue">
                  <span className="course__active-continue-title"
                    >Tiếp tục bài học: </span
                  >Từ vựng TOEIC - List 10
                </p>
              </div>
            </a>
            <a href="" className="couse__active-link col l-3 m-6 c-12">
              <div className="course__active-box">
                <h4 className="course__active-title">Complete TOEIC</h4>
                <p className="course__active-state">Đã kích hoạt</p>
                <p className="course__active-percent">17%</p>
                <div className="course__active-progress"></div>
                <p className="course__active-continue">
                  <span className="course__active-continue-title"
                    >Tiếp tục bài học: </span
                  >Từ vựng TOEIC - List 10
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
}