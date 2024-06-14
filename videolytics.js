
let dataFull = [
    {
      url: 'http://127.0.0.1:5501',
      video: 'https://VSLConquerx.b-cdn.net/conquerblocks/conquerblocks-spain.mp4',
      calendly: 'https://calendly.com/d/yr6-m6b-srg?utm_id=general&month=2024-06',
      percent_to_view_boton: 75,
      comentario: 'Test'
    },
    {
      url: '/video-clase-es',
      video: 'https://VSLConquerx.b-cdn.net/conquerblocks/conquerblocks-spain.mp4',
      calendly: 'https://calendly.com/d/ygn-twk-8cp/sesion-de-claridad-desarrollo-full-stack-es/?utm_id=spain&month=2024-06',
      percent_to_view_boton: 75,
      comentario: 'ConquerBlocks EspaÃ±a'
    },
    {
      url: '/video-clase-latam',
      video: 'https://VSLConquerx.b-cdn.net/conquerblocks/conquerblocks-latam.mp4',
      calendly: 'https://calendly.com/d/y47-nwj-dkh/sesion-de-claridad-desarrollo-full-stack-latam/?utm_id=latam&month=2024-06',
      percent_to_view_boton: 75,
      comentario: 'ConquerBlocks Latam'
    },
    {
      url: '/video-clase-ar',
      video: 'https://VSLConquerx.b-cdn.net/conquerblocks/conquerblocks-argentina.mp4',
      calendly: 'https://calendly.com/d/z7y-kj6-mhz/sesion-de-claridad-desarrollo-full-stack-ar/?utm_id=arg&month=2024-06',
      percent_to_view_boton: 75,
      comentario: 'ConquerBlocks Argentina'
    },
    {
      url: '/video-clase-us',
      video: 'https://VSLConquerx.b-cdn.net/conquerblocks/conquerblocks-usa.mp4',
      calendly: 'https://calendly.com/d/2j9-9yx-c9w/sesion-de-claridad-desarrollo-full-stack-us/?utm_id=usa&month=2024-06',
      percent_to_view_boton: 75,
      comentario: 'ConquerBlocks USA'
    },
    {
      url: '/video-clase-eu',
      video: 'https://VSLConquerx.b-cdn.net/conquerblocks/conquerblocks-spain.mp4',
      calendly: 'https://calendly.com/d/cn79-sv7-b3x/sesion-de-claridad-desarrollo-full-stack-eu&month=2024-06',
      percent_to_view_boton: 75,
      comentario: 'ConquerBlocks EU'
    },
    {
      url: '/video-clase',
      video: 'https://VSLConquerx.b-cdn.net/conquerblocks/conquerblocks-spain.mp4',
      calendly: 'https://calendly.com/d/yr6-m6b-srg/?utm_id=general&month=2024-06',
      percent_to_view_boton: 75,
      comentario: 'ConquerBlocks General'
    }
  ];
  
  var actualUrl = window.location.href;
  var actualData = dataFull.find(data => actualUrl.includes(data.url));
  
  var videolitics_debug = false;
  // Cargar dinÃ¡micamente hojas de estilo de CSS
  function loadCSS(href) {
      // add plyr css to head
      let element = document.createElement('link');
      element.rel = 'stylesheet';
      element.href = href;
      document.head.appendChild(element);
  }
  
  // FunciÃ³n para cargar dinÃ¡micamente librerias JavaScript
  function loadJS(src, callback) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = callback; // Llama al callback una vez cargado
      document.head.appendChild(script);
  }
  
  // Cargar CSS en lÃ­nea para evitar cargar un archivo adicional
  function loadInlineCSS() {
      let video_container = document.querySelector('.js-videolitics-container');
  
      let css = `
  
          body{
              font-family: "Inter", sans-serif;
              font-optical-sizing: auto;
              font-weight: 400;
              font-style: normal;
              font-variation-settings: "slnt" 0;
          }
  
          .c-videolitics-message-title{
        text-wrap:balance;
        font-size: 16px;
        @media (min-width: 640px) {
          font-size: 36px;
        }
      }
          .c-videolitics-message-subtitle{
        text-wrap:pretty;
      }
  
          .c-videolitics-message-title,
          .c-videolitics-message-subtitle {
        text-align: center;
        margin-top:0;
        color:white;
              text-shadow: 0px 0px 3px rgba(0,0,0,1);
          }
  
          #js-videolitics-container {
              position: relative;
        box-shadow: 0 2px 20px 6px rgba(127, 193, 255, .28);
          }
  
      #js-videolitics-unmute:hover {
        cursor: pointer;
      }
  
          #js-videolitics-unmute-button,
          .c-videolitics-returning-button{
              margin:0;padding:0;border:0;
              padding:0.5rem 0.8rem;
              background-color: #5996e1;
              color:white;
              font-weight:500;
              cursor:pointer;
              text-transform:uppercase;
              border-radius:5px;
        @media (min-width: 640px) {
          padding: .8rem 1.2rem;
          font-size: 20px;
        }
          }
  
          .c-videolitics-returning-button + .c-videolitics-returning-button {
              margin-left:1rem;
          }
  
          /* TODO: Responsive no estÃ¡ adaptado el texto */
          #js-videolitics-container .modal{
              padding:1rem;
              display: grid;
              place-items: center;
              text-align: center;
  
              position:absolute;
              inset:0%;
              background-color:#000000CC;
          }
  
      #js-videolitics-container .modal-buttons{
        display: flex;
        flex-direction: column;
        gap: 10px;
        @media (min-width: 640px) {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          gap: 20px;
        }
      }
  
      #js-videolitics-container .modal-buttons button{
        background-color: transparent;
        border: 0;
        outline: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
      }
  
      #js-videolitics-container .modal-buttons button svg{
        width: 40px;
        @media (min-width: 640px) {
          width: 80px;
        }
      }
  
      #js-videolitics-unmute{
        svg {
          width: 40px !important;
          height: 40px !important;
          margin-bottom: 5px;
          @media (min-width: 640px) {
            width: 120px !important;
            height: 120px !important;
            margin-bottom: 10px;
          }
        }
      }
  
      .ResumePlay__button:hover{
        cursor: pointer;
      }
  
          #js-videolitics-container{
  
          }
  
          #js-videolitics-calendly-container{
              margin-top: 2rem;
              margin-bottom: 3rem;
              text-align: center;
              display:flex;
              gap:16px;
              justify-content:center;
              align-items:center;
              text-transform:uppercase;
          }
  
          #js-videolitics-calendly-container a{
              display: inline-block;
        background-image: linear-gradient(95deg, rgb(186, 224, 163), rgb(115, 186, 200) 43%);
        outline-offset: 0px;
        border: 4px rgba(255, 255, 255, .42);
        border-radius: 85px;
        outline: 4px solid rgba(118, 157, 255, .28);
        padding: 20px 40px;
        font-family: "Montserrat", sans-serif;
        font-size: 19px;
        font-family: Montserrat, sans-serif;
        font-size: 18px;
        font-weight: 800;
        text-decoration: none;
  
        @media (max-width: 640px) {
          padding: 10px 30px;
          font-size: 16px;
          font-weight: 600;
          width: 90%;
        }
          }
  
      #js-videolitics-calendly-container a:visited, #js-videolitics-calendly-container a:link {
        color: white !important;
      }
      `;
  
      let style = document.createElement('style');
      style.innerHTML = css;
      document.body.appendChild(style);
  }
  
  function showCalendlyButton() {
  
      if (document.querySelector('#js-videolitics-calendly-container')) return;
  
      let calendly = document.createElement('a');
      calendly.id = 'js-videolitics-calendly';
    calendly.href = actualData.calendly;
  
    //Vemos si hay parÃ¡metros name y utms
    let urlParams = new URLSearchParams(window.location.search);
  
    const nameParam = urlParams.get('name')
    const emailParam = urlParams.get('email')
    const utm_source = urlParams.get('utm_source');
    const utm_medium = urlParams.get('utm_medium');
    const utm_campaign = urlParams.get('utm_campaign');
    const utm_term = urlParams.get('utm_term');
    const utm_content = urlParams.get('utm_content');
  
    if (nameParam) {
        calendly.href = `${calendly.href}&name=${nameParam}`;
    }
    if (emailParam) {
      calendly.href = `${calendly.href}&email=${emailParam}`;
    }
  
    if (utm_source) {
      calendly.href = `${calendly.href}&utm_source=${utm_source}`;
    }
  
    if (utm_medium) {
      calendly.href = `${calendly.href}&utm_medium=${utm_medium}`;
    }
  
    if (utm_campaign) {
      calendly.href = `${calendly.href}&utm_campaign=${utm_campaign}`;
    }
  
    if (utm_term) {
      calendly.href = `${calendly.href}&utm_term=${utm_term}`;
    }
  
    if (utm_content) {
      calendly.href = `${calendly.href}&utm_content=${utm_content}`;
    }
  
      calendly.innerHTML = 'Agendar SesiÃ³n de Claridad Gratuita';
      calendly.target = '_blank';
  
      // create a container for the calendly button
      let calendly_container = document.createElement('div');
      calendly_container.id = 'js-videolitics-calendly-container';
      calendly_container.appendChild(calendly);
  
      document.querySelector('.js-videolitics').appendChild(calendly_container);
  }
  
  // CÃ³digo principal
  function videolitics_code() {
      // debug: delete local storage
      if (videolitics_debug) {
          localStorage.removeItem('videolitics');
      }
  
      loadInlineCSS()
  
      let component = document.querySelector('.js-videolitics');
  
      if (!component) return;
  
      let video_url = actualData.video;
    let video_calendly = actualData.calendly;
  
      if (videolitics_debug) {
          console.log('[videolitics.js] video_url', video_url);
          console.log('[videolitics.js] video_calendly', video_calendly);
      }
  
      // init local storage
      if (!localStorage.getItem('videolitics')) {
          localStorage.setItem('videolitics', JSON.stringify({
              time: 0,
              progress_percent: 0,
              visit_number: 1,
              unmuted: false,
              is_returning: false,
              progress_latest_visit: 0,
              video_url: video_url,
          }));
      } else {
          let videolitics = JSON.parse(localStorage.getItem('videolitics'));
          videolitics.visit_number++;
          videolitics.is_returning = true;
          localStorage.setItem('videolitics', JSON.stringify(videolitics));
      }
  
      if (!video_url) return;
  
      let player = new Plyr('#js-videolitics-player', {
          controls: ['play', 'mute', 'volume', 'fullscreen'],
          hideControls: false,
          autoplay: true,
          muted: true,
      });
  
      if (video_url.search('youtu') !== -1) {
          if (videolitics_debug) {
              console.log('[videolitics.js] youtube video')
          }
  
          // get youtube video id
          let video_id = video_url.split('v=')[1];
  
          if (videolitics_debug) {
              console.log('[videolitics.js] youtube video_id', video_id);
          }
  
          player.source = {
              type: 'video',
              sources: [
                  {
                      src: video_id,
                      provider: 'youtube',
                  },
              ],
          };
      } else if (video_url.search('vimeo') !== -1) {
          if (videolitics_debug) {
              console.log('[videolitics.js] vimeo video')
          }
          // get vimeo video id
          let video_id = video_url.split('vimeo.com/')[1];
  
          if (videolitics_debug) {
              console.log('[videolitics.js] vimeo video_id', video_id);
          }
  
          player.source = {
              type: 'video',
              sources: [
                  {
                      src: video_id,
                      provider: 'vimeo',
                  },
              ],
          };
      } else if (video_url.search('.mp4') !== -1) {
          if (videolitics_debug) {
              console.log('[videolitics.js] mp4 video')
          }
          player.source = {
              type: 'video',
              sources: [
                  {
                      src: video_url,
                      type: 'video/mp4',
                  },
              ],
          };
      }
  
      // Una vez que tenemos el vÃ­deo, lo reproducimos
      // Reproducir el vÃ­deo de por si
      player.muted = true;
      player.play();
  
      // Actualizar en el local storage el tiempo del video
      let videolitics = JSON.parse(localStorage.getItem('videolitics'));
      player.on('timeupdate', event => {
          videolitics.time = event.detail.plyr.currentTime;
  
          if (player.muted === false) {
              videolitics.progress_latest_visit = event.detail.plyr.currentTime;
          }
  
  
          // Calcular el porcentaje de progreso del video
      let progress_percent = (videolitics.time / event.detail.plyr.duration) * 100;
  
      if (progress_percent > actualData.percent_to_view_boton) {
        showCalendlyButton();
      }
  
          // Si el porcentaje de progreso es mayor al que ya tenÃ­amos, lo actualizamos
          if (progress_percent > videolitics.progress_percent) {
              videolitics.progress_percent = progress_percent;
          }
  
          localStorage.setItem('videolitics', JSON.stringify(videolitics));
      });
  
      // Si es la primera vez que visita la pÃ¡gina, mostrar un modal para desactivar el mute
      if (videolitics.visit_number === 1) {
          let modal = document.createElement('div');
          modal.id = 'js-videolitics-unmute';
          modal.innerHTML = `
                  <div class="modal">
                      <div class="modal-content">
                      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5001 11.9998C15.5001 12.5317 15.4647 13.4879 15.4128 14.6052C15.2726 17.6226 15.2025 19.1313 14.2798 19.7797C14.1029 19.9041 13.9048 20.0049 13.7001 20.0747C12.7327 20.4048 11.5976 19.747 9.50009 18.3725M7.01629 17.0417C6.76828 16.9998 6.51225 16.9998 6.00018 16.9998C4.62626 16.9998 3.9393 16.9998 3.33997 16.7225C2.79239 16.4692 2.24482 15.9539 1.95863 15.4228C1.6454 14.8414 1.60856 14.237 1.53488 13.0282C1.52396 12.849 1.51525 12.6722 1.50928 12.4998M1.95863 8.57679C2.24482 8.04563 2.79239 7.53042 3.33997 7.27707C3.9393 6.99979 4.62626 6.99979 6.00018 6.99979C6.51225 6.99979 6.76828 6.99979 7.01629 6.95791C7.26147 6.9165 7.50056 6.84478 7.72804 6.74438C7.95815 6.64283 8.1719 6.50189 8.59941 6.22002L8.81835 6.07566C11.3613 4.39898 12.6328 3.56063 13.7001 3.92487C13.9048 3.9947 14.1029 4.09551 14.2798 4.21984C15.1151 4.80685 15.2517 6.09882 15.3741 8.57679" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M20 18C20 18 21.5 16.2 21.5 12C21.5 9.56658 20.9965 7.93882 20.5729 7" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M18 15C18 15 18.5 14.1 18.5 12C18.5 11.1381 18.4158 10.4784 18.3165 10" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M22 2L2 22" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                      <script xmlns="" id="bw-fido2-page-script"/></svg>
                          <p class="c-videolitics-message-subtitle">El vÃ­deo se estÃ¡ reproduciendo<br>Click para activar el audio</p>
                          <button id="js-videolitics-unmute-button">Ver vÃ­deo</button>
                      </div>
                  </div>
              `;
  
          document.querySelector('#js-videolitics-container').appendChild(modal);
  
          // document.querySelector('#js-videolitics-unmute-button').addEventListener('click', function () {
          // 	player.muted = false;
          // 	player.restart();
          // 	document.querySelector('#js-videolitics-unmute').remove();
      // });
  
      document.querySelector('#js-videolitics-unmute').addEventListener('click', function () {
        player.muted = false;
        player.restart();
        document.querySelector('#js-videolitics-unmute').remove();
      });
          // Si no es la primera vez que visita la pÃ¡gina, mostrar un modal para continuar o reiniciar el video
      } else if (videolitics.is_returning) {
          let modal = document.createElement('div');
          modal.id = 'js-videolitics-returning';
          modal.innerHTML = `
                  <div class="modal">
                      <div class="modal-content">
                          <h2 class="c-videolitics-message-title">Ya habÃ­as comenzado a ver este video</h2>
              <div class="modal-buttons">
                <button type="button" class="ResumePlay__button" id="js-videolitics-returning-continue">
                  <svg viewBox="0 0 62 62" class="ResumePlay__button__icon" style="filter: drop-shadow(rgb(57, 116, 255) 1px 1px 1px);"><circle cx="30.7157" cy="30.7155" r="29.1798" stroke="#3974ff" stroke-width="3.07155"></circle>
                    <path d="M21.885 41.3331V20.098C21.885 18.4787 23.663 17.4949 25.0323 18.3763L41.6677 28.9938C42.9348 29.7932 42.9348 31.638 41.6677 32.4578L25.0323 43.0549C23.663 43.9363 21.885 42.9524 21.885 41.3331Z" fill="#ffffff"></path></svg>
                    <div class="ResumePlay__button__title"><div class="ResumePlay__button__article">
                      <div><div class="ScalableText__scalable-text ResumePlay__button__text" style="color: rgb(255, 255, 255); white-space: nowrap; display: inline-block; font-size: 17.3981px;">Â¿Continuar donde lo dejaste?</div>
                    </div>
                </div>
                </div>
                </button>
                <button type="button" class="ResumePlay__button" id="js-videolitics-returning-restart"><svg viewBox="0 0 62 62" class="ResumePlay__button__icon" style="filter: drop-shadow(rgb(57, 116, 255) 1px 1px 1px);"><circle cx="30.7157" cy="31.1467" r="29.1798" stroke="#3974ff" stroke-width="3.07155"></circle><path d="M30.7156 18.8286V13.9189C30.7156 13.1271 29.7654 12.7399 29.2198 13.303L22.5328 19.9725C22.1809 20.3244 22.1809 20.8699 22.5328 21.2219L29.2022 27.8913C29.7654 28.4368 30.7156 28.0497 30.7156 27.2578V22.3481C37.2795 22.3481 42.4707 28.3664 41.0277 35.1767C40.2006 39.1713 36.9627 42.3916 32.9857 43.2187C26.7034 44.5385 21.1074 40.2271 20.2627 34.4024C20.1396 33.5577 19.4005 32.9066 18.5382 32.9066C17.4823 32.9066 16.6377 33.8393 16.7784 34.8951C17.8695 42.6204 25.2252 48.3395 33.5488 46.7206C39.0392 45.6471 43.4562 41.2302 44.5296 35.7398C46.2718 26.7123 39.4088 18.8286 30.7156 18.8286Z" fill="#ffffff"></path></svg><div class="ResumePlay__button__title"><div class="ResumePlay__button__article"><div><div class="ScalableText__scalable-text ResumePlay__button__text" style="color: rgb(255, 255, 255); white-space: nowrap; display: inline-block; font-size: 17.5686px;">Â¿Empezar desde el principio?</div></div></div></div></button>
              </div>
  
                      </div>
                  </div>
              `;
  
          document.querySelector('#js-videolitics-container').appendChild(modal);
  
          document.querySelector('#js-videolitics-returning-continue').addEventListener('click', function () {
              // player.play();
              player.muted = false;
              player.currentTime = videolitics.progress_latest_visit;
  
              document.querySelector('#js-videolitics-returning').remove();
          });
  
          document.querySelector('#js-videolitics-returning-restart').addEventListener('click', function () {
              player.restart();
              player.play();
              player.muted = false;
              document.querySelector('#js-videolitics-returning').remove();
          });
      }
  
      // TODO: COMPROBAR Mostrar el botÃ³n de calendly cuando el vÃ­deo termine
    player.on('ended', event => {
  
      let redirectionUrl = actualData.calendly;
  
      //Vemos si hay parÃ¡metros name y utms
      let urlParams = new URLSearchParams(window.location.search);
  
      const nameParam = urlParams.get('name')
      const emailParam = urlParams.get('email')
      const utm_source = urlParams.get('utm_source');
      const utm_medium = urlParams.get('utm_medium');
      const utm_campaign = urlParams.get('utm_campaign');
      const utm_term = urlParams.get('utm_term');
      const utm_content = urlParams.get('utm_content');
  
      if (nameParam) {
          calendly.href = `${calendly.href}&name=${nameParam}`;
      }
      if (emailParam) {
        calendly.href = `${calendly.href}&email=${emailParam}`;
      }
  
      if (utm_source) {
        calendly.href = `${calendly.href}&utm_source=${utm_source}`;
      }
  
      if (utm_medium) {
        calendly.href = `${calendly.href}&utm_medium=${utm_medium}`;
      }
  
      if (utm_campaign) {
        calendly.href = `${calendly.href}&utm_campaign=${utm_campaign}`;
      }
  
      if (utm_term) {
        calendly.href = `${calendly.href}&utm_term=${utm_term}`;
      }
  
      if (utm_content) {
        calendly.href = `${calendly.href}&utm_content=${utm_content}`;
      }
  
      window.location.href = redirectionUrl;
      });
  
      // TODO: COMPROBAR Mostrar el botÃ³n de calendly si no es su primera visita
      if (videolitics.is_returning) {
          showCalendlyButton(actualData.calendly);
      }
  }
  
  
  // Main
  document.addEventListener('DOMContentLoaded', function () {
      if (videolitics_debug) { console.log('[videolitics.js] loaded') }
  
      // Cargar plyr.css
      loadCSS('https://cdn.plyr.io/3.7.8/plyr.css');
  
      // Cargar plyr.js. Es importante el callback para que se ejecute el cÃ³digo principal justo despuÃ©s de cargar la librerÃ­a
      loadJS('https://cdn.plyr.io/3.7.8/plyr.js', videolitics_code);
  });