"use client"
import  Link  from 'next/link';
import "../handicraftCSS/loginAndRegisterAndActive.css"
import "./login.css"
import { loginUser } from "../../redux/features/apiRequest";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useRouter();

    const handleLogin = (e:any) => {
        e.preventDefault();//khong reload trang  khi submit
        const newUser = {
          username: username,
          password: password,
        };
        loginUser(newUser, dispatch, navigate.push);
      };
    return (
        // <div className="content__container">
        //   <div className="login__container">
        //     <p className="login__details">
        //       Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
        //       TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
        //     </p>
        //     <a href="/View/profile.html" className="login__btn login__btn--fb"
        //       >Đăng nhập với Facebook</a
        //     >
        //     <br />
        //     <a href="/View/profile.html" className="login__btn login__btn--gg"
        //       >Đăng nhập với Google</a
        //     >
        //     <br />
        //     <Link href="/register" className="login__link-to-register">Bạn chưa là một thành viên? Đăng ký ngay!</Link>
        //   </div>
        // </div>
        <section className="login-container">
            <div className="login-title"> Log in</div>
            <form onSubmit={handleLogin}>
                <label>USERNAME</label>
                <input
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <label>PASSWORD</label>
                <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit"> Continue </button>
            </form>
            <div className="login-register"> Don't have an account yet? </div>
            <Link className="login-register-link" href="/register">
                Register one for free
            </Link>
        </section>
    )
}