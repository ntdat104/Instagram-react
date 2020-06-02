import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__content">
          <div className="info">
            <a href="https://www.instagram.com/ntdat.104/">
              <img src="./images/profile_image.jpg" alt="" />
            </a>
            <div className="info__name">
              <h4>
                <a href="https://www.instagram.com/ntdat.104/">ntdat.104</a>
              </h4>
              <span>Tiến Đạt</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative__suggest">
              <h4>Gợi ý cho bạn</h4>
              <h4>
                <a href="#">Xem tất cả</a>
              </h4>
            </div>
            <div className="relative__follow">
              <div className="relative__item">
                <a href="https://www.instagram.com/manttien/">
                  <img src="./images/manttien.jpg" alt="" />
                </a>
                <div className="relative__item__info">
                  <h4>
                    <a href="https://www.instagram.com/manttien/">manttien</a>
                  </h4>
                  <span>Theo dõi bạn</span>
                </div>
                <a href="https://www.instagram.com/manttien/">Theo dõi</a>
              </div>
              <div className="relative__item">
                <a href="https://www.instagram.com/sontungmtp/">
                  <img src="./images/sontungmtp.jpg" alt="" />
                </a>
                <div className="relative__item__info">
                  <h4>
                    <a href="https://www.instagram.com/sontungmtp/">
                      sontungmtp
                    </a>
                  </h4>
                  <span>Theo dõi bạn</span>
                </div>
                <a href="https://www.instagram.com/sontungmtp/">Theo dõi</a>
              </div>
              <div className="relative__item">
                <a href="https://www.instagram.com/jaykiiofficial/">
                  <img src="./images/jaykiiofficial.jpg" alt="" />
                </a>
                <div className="relative__item__info">
                  <h4>
                    <a href="https://www.instagram.com/jaykiiofficial/">
                      jaykiiofficial
                    </a>
                  </h4>
                  <span>Theo dõi bạn</span>
                </div>
                <a href="https://www.instagram.com/jaykiiofficial/">Theo dõi</a>
              </div>
              <div className="relative__item">
                <a href="https://www.instagram.com/chipupu/">
                  <img src="./images/chipupu.jpg" alt="" />
                </a>
                <div className="relative__item__info">
                  <h4>
                    <a href="https://www.instagram.com/chipupu/">chipupu</a>
                  </h4>
                  <span>Theo dõi bạn</span>
                </div>
                <a href="https://www.instagram.com/chipupu/">Theo dõi</a>
              </div>
              <div className="relative__item">
                <a href="https://www.instagram.com/misthyyyy/">
                  <img src="./images/misthyyyy.jpg" alt="" />
                </a>
                <div className="relative__item__info">
                  <h4>
                    <a href="https://www.instagram.com/misthyyyy/">misthyyyy</a>
                  </h4>
                  <span>Theo dõi bạn</span>
                </div>
                <a href="https://www.instagram.com/misthyyyy/">Theo dõi</a>
              </div>
            </div>
          </div>
          <div className="policy">
            <ul>
              <li className="policy__list">
                <a href="#">Giới thiệu</a>
                <a href="#">Trợ giúp</a>
                <a href="#">Báo chí</a>
                <a href="#">API</a>
                <a href="#">Việc làm</a>
              </li>
              <li className="policy__list__item">
                <a href="#">Quyền riêng tư</a>
                <a href="#">Điều khoản</a>
                <a href="#">Vị trí</a>
              </li>
              <li className="policy__list__item">
                <a href="#">Tài khoản liên quan nhất</a>
                <a href="#">Hashtag</a>
                <a href="#">Ngôn ngữ</a>
              </li>
            </ul>
            <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
