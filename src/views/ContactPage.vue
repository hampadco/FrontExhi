<template>
       <!-- شروع محتوای ابزارک سایدبار -->
      <div class="xs-sidebar-group info-group info-sidebar">
        <div class="xs-overlay xs-bg-black"></div>
        <div class="xs-sidebar-widget">
          <div class="sidebar-widget-container">
            <div class="widget-heading">
              <a href="#" class="close-side-widget">X</a>
            </div>
            <div class="sidebar-textwidget">
              <div class="sidebar-info-contents">
                <div class="content-inner">
                  <div class="logo">
                    <a href="/"
                      ><img src="assets/img/resource/logo-1.png" alt="لوگو"
                    /></a>
                  </div>
                  <div class="content-box">
                    <h4>درباره ما</h4>
                    <div class="inner-text">
                      <p>
                        سایت فناوری ای تی و تکنولوژی منبعی جامع برای جدیدترین
                        اخبار و تحلیل‌های دنیای فناوری است. این سایت به ارائه
                        مقالات آموزشی، بررسی‌های محصولات و راهنمایی‌های فنی
                        می‌پردازد
                      </p>
                    </div>
                  </div>

                  <div class="form-inner">
                    <h4>دریافت پیشنهاد رایگان</h4>
                    <form
                      action="https://figtheme.com/html/techlab/index.html"
                      method="post"
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="نام"
                          required=""
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="ایمیل"
                          required=""
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          name="message"
                          placeholder="پیام..."
                        ></textarea>
                      </div>
                      <div class="form-group message-btn">
                        <button
                          class="button-style-1"
                          type="submit"
                          data-loading-text="لطفا صبر کنید..."
                        >
                          ارسال
                        </button>
                      </div>
                    </form>
                  </div>

                  <div class="sidebar-contact-info">
                    <h4>اطلاعات تماس</h4>
                    <ul>
                      <li><span class="icon-pin"></span> خیابان 88، تهران</li>
                      <li>
                        <span class="icon-call"></span>
                        <a href="tel:123456789">+98 21-555-9990</a>
                      </li>
                      <li>
                        <span class="fa fa-envelope"></span>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </li>
                    </ul>
                  </div>
                  <div class="thm-social-link1">
                    <ul class="social-box">
                      <li class="facebook">
                        <a href="#"
                          ><i class="icon-facebook" aria-hidden="true"></i
                        ></a>
                      </li>
                      <li class="twitter">
                        <a href="#"
                          ><i class="icon-twitter" aria-hidden="true"></i
                        ></a>
                      </li>
                      <li class="linkedin">
                        <a href="#"
                          ><i class="icon-instagram" aria-hidden="true"></i
                        ></a>
                      </li>
                      <li class="gplus">
                        <a href="#"
                          ><i class="fab fa-pinterest" aria-hidden="true"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- پایان محتوای ابزارک سایدبار -->

      <!-- شروع هدر صفحه -->
      <section class="page-header">
        <div
          class="page-header__bg"
          style="background-image: url(assets/img/bg/page-header-bg.jpg)"
        ></div>
        <div class="container">
          <div class="page-header__inner">
            <h2>تماس با ما</h2>
            <ul class="thm-breadcrumb">
              <li><a href="/">صفحه اصلی</a></li>
              <li><span>/</span></li>
              <li>تماس با ما</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- پایان هدر صفحه -->

      <!-- شروع صفحه تماس -->
      <section class="contact-page">
        <div class="container">
          <div class="row">
            <!-- شروع فرم صفحه تماس -->
            <div class="col-xl-8 col-lg-8">
              <div class="contact-page__form">
                <div class="title-box">
                  <h2>پیام خود را برای ما ارسال کنید</h2>
                </div>
                <form
                  id="contact-form"
                  action="https://figtheme.com/html/techlab/assets/mail.php"
                  method="POST"
                >
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                      <div class="input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="نام شما"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                      <div class="input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="ایمیل شما"
                          required=""
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                      <div class="input-box">
                        <input
                          type="number"
                          placeholder="شماره تماس"
                          name="number"
                        />
                      </div>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6">
                      <div class="input-box">
                        <input type="text" placeholder="شرکت" name="company" />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-12">
                      <div class="input-box">
                        <textarea name="message" placeholder="پیام"></textarea>
                      </div>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6">
                      <div class="contact-page__form-btn">
                        <button
                          class="button-style-1"
                          type="submit"
                          data-loading-text="لطفا صبر کنید..."
                        >
                          ارسال پیام
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <p class="ajax-response mb-0"></p>
              </div>
            </div>
            <!-- پایان فرم تماس -->

            <!-- شروع اطلاعات تماس صفحه -->
          <div class="col-xl-4 col-lg-4">
  <div class="contact-page__contact-info">
    <div class="title-box">
      <h2>با ما در ارتباط باشید</h2>
      <p>
        "ما با بیش از یک دهه تجربه در زمینه طراحی و ساخت غرفه‌های نمایشگاهی، آماده ارائه خدمات حرفه‌ای و مشاوره تخصصی به شما هستیم."
      </p>
    </div>

    <ul>
      <li>
        <div class="icon-box">
          <span class="icon-pin"></span>
        </div>
        <div class="text-box">
          <h3>آدرس</h3>
          <p>ایران ، تهران ، تهرانپارس خیابان پیشوا پلاک یک</p>
        </div>
      </li>

      <li>
        <div class="icon-box">
          <span class="icon-envelope"></span>
        </div>
        <div class="text-box">
          <h3>آدرس ایمیل</h3>
          <p>
            <a href="mailto:info@xinosazeh.com">info@xinosazeh.com</a>
          </p>
        </div>
      </li>

      <li>
        <div class="icon-box">
          <span class="icon-call"></span>
        </div>
        <div class="text-box">
          <h3>شماره تلفن</h3>
          <p><a href="tel:09124058041" dir="ltr">(0912) 405-8041</a></p>
        </div>
      </li>
    </ul>
  </div>
</div>
            <!-- پایان اطلاعات تماس -->
          </div>
        </div>
      </section>
      <!-- پایان صفحه تماس -->

      <!-- شروع نقشه گوگل -->
      <section class="google-map-one">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150688.9610981286!2d51.3889743!3d35.6891978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0164b4979c63%3A0x59f58f7e16cf96b4!2z2KfZhNin2YTYp9mE2KfYqiDYqNin2KfY2YjYqiDYt9mH2YHYq9mE2KfYqiDZhNin2KfY2YjY!5e0!3m2!1sen!2s!4v1632876601234!5m2!1sen!2s"
          class="google-map-one__map"
          allowfullscreen
        ></iframe>
      </section>

      <!-- پایان نقشه گوگل -->

</template>