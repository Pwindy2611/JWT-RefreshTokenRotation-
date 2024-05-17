import "../handicraftCSS/loginAndRegisterAndActive.css";
export default function ActiveCourse()
{
    return(
        <div >
      <div className="content__container">
        <div className="login__container">
          <h3 className="active__course-header">Kích hoạt khoá học</h3>
          <p className="active__course-label">Mã kích hoạt</p>
          <input
            type="text"
            className="active__course-input"
            placeholder="Nhập mã kích hoạt"
          />
          <p className="active__course-label">Số điện thoại mua hàng</p>
          <input
            type="tel"
            className="active__course-input"
            placeholder="Nhập số điện thoại trong phiếu kích hoạt"
          />
          <a href="" className="active__course-link">Kích hoạt</a>
          <p className="active__course-connect">
            Liên hệ hotline 096-369-5525 nếu bạn gặp vấn đề về kích hoạt khóa
            học.
          </p>
          <a href="" className="login__link-to-register">Hướng dẫn mua hàng</a>
          <a href="" className="login__link-to-register"
            >Kiểm tra tài khoản đã kích hoạt khóa học</a
          >
        </div>
      </div>
    </div>
    )
}