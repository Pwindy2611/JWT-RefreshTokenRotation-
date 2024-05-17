"use client"
import React,{useState} from 'react'
import { useRouter } from 'next/navigation';
import {useDispatch, useSelector} from "react-redux";
import { logOut } from "../../redux/features/apiRequest";
import { createAxios } from "../../createInstance";
import { logOutSuccess } from "../../redux/features/authSlices";
import { ModeToggle } from "@/components/handicraft/mode-toggle";
import { ButtonDemo } from '../handicraft/loginBtn';
import { ButtonGhost } from '../handicraft/registerBtn';
import  Link  from 'next/link';
import Image from "next/image";

export default function Header() {
  const user = useSelector((state:any)=> state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useRouter();
  let axiosJWT = createAxios(user,dispatch,logOutSuccess);

  const handleLogout = () =>{
    logOut(dispatch,id,navigate.push, accessToken,axiosJWT);
  }
  return (
   <div>
     <nav className="navbar">
      <div className="grid wide">
        <div className="nav__container">
          <Link href="/">
            <img
              className="nav__img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EOw8FBT_Sn6rQqg_NQGLLkHQKEQjA1h_c6ujo5_A&s"
              alt="Logo"
              width="150px"
              height="55px"
            />
          </Link>
          <div className="nav_right">
            <ul className="nav__list hide-on-tablet hide-on-mobile">
              <li className="nav__item">
                <Link href="/courseOnline" className="nav__link"
                  >Khóa học online</Link>
              </li>
              <li className="nav__item">
                <Link href="/examOnline" className="nav__link"
                  >Đề thi online</Link>
              </li>
              <li className="nav__item">
                <Link href="/flashCard" className="nav__link">Flashcards</Link>
              </li>
              <li className="nav__item">
                <Link href="/dashBoard/getAllUser" className="nav__link">Blog</Link>
              </li>
              <li className="nav__item">
                <Link href="/activeCourse" className="nav__link"
                  >Kích hoạt khóa học</Link>
              </li>
              <li className="nav__item nav__item-login">
                {user?(
                    <>
                    <p>Hi <span>{user.username}</span></p>
                    <Link href="/" className="navbar-logout" onClick={handleLogout}> Log out</Link>
                    </>
                    ):(
                      <Link href="/login" className="nav__link-login">Đăng nhập</Link>
                    )}
              </li>
            </ul>

            <label htmlFor="nav-mobile-input" className="menubar__icon hide">
              <i className="fa-solid fa-bars nav__icon"></i>
            </label>
            <input type="checkbox" id="nav-mobile-input" className="nav__input" />
            <label htmlFor="nav-mobile-input" className="nav__overlay"></label>
            <div className="nav__mobile hide">
              <ul className="nav__list-mobile">
                <li className="nav__item-mobile">
                  <Link href="/courseOnline" className="nav__link-mobile"
                    >Khóa học online</Link>
                </li>
                <li className="nav__item-mobile">
                  <Link href="/examOnline" className="nav__link-mobile"
                    >Đề thi online</Link>
                </li>
                <li className="nav__item-mobile">
                  <Link href="/flashCard" className="nav__link-mobile"
                    >Flashcards</Link>
                </li>
                <li className="nav__item-mobile">
                  <Link href="/dashBoard/getAllUser" className="nav__link-mobile">Blog</Link>
                </li>
                <li className="nav__item-mobile">
                  <Link href="/activeCourse" className="nav__link-mobile"
                    >Kích hoạt khóa học</Link>
                </li>
                <li className="nav__item-mobile nav__item-login nav__item-login-mobile">
                {user?(
                  <>
                  <p>Hi <span>{user.username}</span></p>
                  <Link href="/" className="navbar-logout" onClick={handleLogout}> Log out</Link>
                  </>
                  ):(
                    <Link href="/login" className="nav__link-login">Đăng nhập</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
   </div>
  )
}
