"use client"
import  Link  from 'next/link';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { registerUser } from "../../redux/features/apiRequest";
import "../handicraftCSS/loginAndRegisterAndActive.css"
import "./register.css"
export default function Register(){
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useRouter();

    const handleRegister= (e:any)=>{
        e.preventDefault();
        const newUser = {
          email: email,
          password:password,
          username:username
        };
        registerUser(newUser,dispatch,navigate.push);
      }
    return(
      // <div>
      //   <div className="content__container">
      //     <div className="login__container">
      //       <p className="login__details">
      //         Đăng ký ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
      //         TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
      //       </p>
      //       <a href="" className="login__btn login__btn--fb">Đăng ký với Facebook</a>
      //       <br />
      //       <a href="" className="login__btn login__btn--gg">Đăng ký với Google</a>
      //       <br />
      //       <p className="register__privacy">
      //         Bằng cách đăng ký, bạn đồng ý với
      //         <a className="login__link-to-register register__privacy--text" href=""
      //           >điều khoản sử dụng</a
      //         >
      //         và
      //         <a className="login__link-to-register register__privacy--text" href=""
      //           >điều khoản bảo mật</a
      //         >.
      //       </p>
      //       <Link href="/login" className="login__link-to-register"
      //         >Đã có tài khoản? Đăng nhập ngay!</Link>
      //     </div>
      //   </div>
      // </div>
      <section className="register-container">
        <div className="register-title"> Sign up </div>
        <form onSubmit={handleRegister}>
            <label>EMAIL</label>
            <input
            type="text"
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <label>USERNAME</label>
            <input
            type="text"
            placeholder="Enter your username"
            onChange={(e)=>setUsername(e.target.value)}
            />
            <label>PASSWORD</label>
            <input
            type="password"
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit"> Create account </button>
        </form>
    </section>
    )
}