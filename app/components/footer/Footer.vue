<template>
  <footer :class="$style['page-footer']">
    <div :class="$style['container']">
      <div :class="[$style['row'], $style['col-4']]">
        <div :class="$style['contact']">
          <div :class="$style['contact__title']">Hubungi Kami</div>

          <div :class="$style['contact__content']">
            <a href="tel:027452055505">0274-52055505</a>
            <label>Senin - Minggu</label>
            <label>24 Jam Nonstop</label>

            <p :class="$style['address']">
              Jl. Selokan Mataram Monjali Karangjati MT I/304 Sinduadi, Mlati,
              Sleman Yogjakarta 55284
            </p>
          </div>
        </div>

        <div :class="$style['services']">
          <div :class="$style['services__title']">Layanan</div>

          <div :class="$style['services__content']">
            <ul :class="$style['list']">
              <li :class="$style['item']">
                <a href="javascript:void">Domain</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Shared Hosting</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Cloud VPS Hosting</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Managed VPS Hosting</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Web Builder</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Keamanan SSL/HTTPS</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Jasa Pembuatan Website</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Program Afiliasi</a>
              </li>
            </ul>
          </div>
        </div>

        <div :class="$style['services-hosting']">
          <div :class="$style['services-hosting__title']">Service Hosting</div>

          <div :class="$style['services-hosting__content']">
            <ul :class="$style['list']">
              <li :class="$style['item']">
                <a href="javascript:void">Domain</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Hosting Murah</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Hosting Indonesia</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Hosting Singapura SG</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Hosting PHP</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Hosting Wordpress</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Hosting Laravel</a>
              </li>
            </ul>
          </div>
        </div>

        <div :class="$style['tutorial']">
          <div :class="$style['tutorial__title']">Tutorial</div>

          <div :class="$style['tutorial__content']">
            <ul :class="$style['list']">
              <li :class="$style['item']">
                <a href="javascript:void">Domain</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Knowledgebase</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Blog</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Cara Pembayaran</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div :class="[$style['row'], $style['col-4']]">
        <div :class="$style['about-us']">
          <div :class="$style['about-us__title']">Tentang Kami</div>

          <div :class="$style['about-us__content']">
            <ul :class="$style['list']">
              <li :class="$style['item']">
                <a href="javascript:void">Tim Niagahoster</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Karir</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Events</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Penawaran Promo Spesial</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Kontak Kami</a>
              </li>
            </ul>
          </div>
        </div>

        <div :class="$style['why-me']">
          <div :class="$style['why-me__title']">Kenapa Pilih Niagahoster?</div>

          <div :class="$style['why-me__content']">
            <ul :class="$style['list']">
              <li :class="$style['item']">
                <a href="javascript:void">Support Terbaik</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Garansi Harga Termurah</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Domain Gratis Selamanya</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">data Center Hosting Terbaik</a>
              </li>

              <li :class="$style['item']">
                <a href="javascript:void">Review Pelanggan</a>
              </li>
            </ul>
          </div>
        </div>

        <div :class="$style['newsletter']">
          <div :class="$style['newsletter__title']">Newsletter</div>

          <div :class="$style['newsletter__content']">
            <div :class="$style['form-input']">
              <input type="email" placeholder="Email" />
              <button>Berlangganan</button>
            </div>

            <label :class="$style['newsletter__content-label']">
              Dapatkan promo dan konten menarik dari penyedia hosting terbaik
              anda.
            </label>
          </div>
        </div>

        <div :class="$style['social-media']">
          <div :class="[$style['social-media__content'], $style['social']]">
            <ul :class="$style['social-links']">
              <li>
                <a
                  href="javascript:void"
                  :class="[$style['facebook'], $style['link']]"
                ></a>
              </li>

              <li>
                <a
                  href="javascript:void"
                  :class="[$style['twitter'], $style['link']]"
                ></a>
              </li>

              <li>
                <a
                  href="javascript:void"
                  :class="[$style['google'], $style['link']]"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div :class="[$style['row'], $style['col-1']]">
        <div :class="$style['payment']">
          <div :class="$style['payment__title']">Pembayaran</div>

          <div :class="$style['payment__content']">
            <ul :class="$style['bank-list']">
              <li :class="$style['bank-list__item']">
                <BCAIcon />
              </li>

              <li :class="$style['bank-list__item']">
                <MandiriIcon />
              </li>

              <li :class="$style['bank-list__item']">
                <BNIIcon />
              </li>

              <li :class="$style['bank-list__item']">
                <BRIIcon />
              </li>

              <li :class="$style['bank-list__item']">
                <VisaIcon />
              </li>
            </ul>

            <label :class="$style['bank-info']">
              Aktifasi instan dengan e-Payment Hosting dan domain langsung aktif
            </label>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import BCAIcon from '~/assets/images/payment/bca.svg?inline'
import MandiriIcon from '~/assets/images/payment/mandiri.svg?inline'
import BNIIcon from '~/assets/images/payment/bni.svg?inline'
import BRIIcon from '~/assets/images/payment/bri.svg?inline'
import VisaIcon from '~/assets/images/payment/visa.svg?inline'

export default {
  components: {
    BCAIcon,
    MandiriIcon,
    BNIIcon,
    BRIIcon,
    VisaIcon
  }
}
</script>
<style lang="scss" module>
@mixin column($total) {
  grid-template-columns: repeat($total, 1fr);
}

.page-footer {
  position: relative;
  background-color: $black-80;
  color: $black-20;
  font-size: 14px;

  .container {
    .row {
      @include container();
      display: grid;
      grid-column-gap: 20px;
      padding: 50px 0;

      &.col-1 {
        @include column(1);
      }

      &.col-2 {
        @include column(2);
      }

      &.col-3 {
        @include column(3);
      }

      &.col-4 {
        @include column(4);
      }

      .contact,
      .services,
      .services-hosting,
      .tutorial,
      .about-us,
      .why-me,
      .newsletter,
      .social-media,
      .payment {
        position: relative;

        &__title {
          color: $black-30;
          font-weight: 700;
          margin-bottom: 20px;
          font-size: 16px;
        }

        &__content {
          display: grid;
          grid-template-rows: 1fr;
          grid-row-gap: 5px;
          font-weight: 300;
          font-size: 14px;

          &.social {
            margin-top: 35px;
          }

          a {
            text-decoration: none;
            color: $black-20;
          }

          ul {
            padding: 0;
            margin: 0;
            display: grid;
            grid-template-rows: 1fr;
            grid-row-gap: 8px;
            font-weight: 300;

            li {
              list-style: none;

              &:first-child {
                padding: 0;
              }
              &:last-child {
                padding-bottom: 0;
              }
            }
          }

          .address {
            width: 195px;
            line-height: 1.8em;
            margin: 10px 0 0;
          }

          .form-input {
            width: 280px;
            position: relative;
            border-radius: 30px;
            background-color: $white;
            overflow: hidden;

            input[type='email'] {
              width: 165px;
              height: 50px;
              padding: 10px 20px;
              background-color: transparent;
              border: none;

              &:focus {
                outline: none;
              }
            }

            button {
              position: absolute;
              top: 5.5px;
              right: 5.5px;
              height: 40px;
              border: 0;
              border-radius: 40px;
              background-color: $blue;
              color: $white;
              font-size: 14px;
              font-weight: 600;
              padding: 0 15px;
              cursor: pointer;

              &:focus {
                outline: none;
              }
            }
          }

          .social-links {
            display: grid;
            @include column(3);

            li {
              width: 50px;
              height: 50px;
              border: 2px solid $white;
              border-radius: 50%;
              font-size: 22px;

              .link {
                width: 100%;
                height: 100%;
                display: flex !important;
                align-items: center;
                justify-content: center;

                &.facebook {
                  @extend %fa-icon;
                  @extend .fab;

                  &:before {
                    content: fa-content($fa-var-facebook-f);
                  }
                }

                &.twitter {
                  @extend %fa-icon;
                  @extend .fab;

                  &:before {
                    content: fa-content($fa-var-twitter);
                  }
                }

                &.google {
                  @extend %fa-icon;
                  @extend .fab;

                  &:before {
                    content: fa-content($fa-var-google);
                  }
                }
              }
            }
          }

          .bank-list {
            display: flex;

            &__item {
              margin-right: 10px;
              opacity: 0.4;
              border: 2px solid $black-20;
              border-radius: 5px;
              padding: 5px 10px !important;

              &:last-child {
                margin-right: 0;
              }

              svg {
                path {
                  fill: $white;
                }
              }
            }
          }

          .bank-info {
            color: $black-40;
            font-weight: 300;
            margin-top: 20px;
          }

          &-label {
            color: $black-40;
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
