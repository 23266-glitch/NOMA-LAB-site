const modal = document.getElementById("memberModal");
const modalAudio = document.getElementById("modalAudio");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalFrom = document.getElementById("modalFrom");
const modalRole = document.getElementById("modalRole");
const modalLike = document.getElementById("modalLike");
const modalComment = document.getElementById("modalComment");

const fromRow = document.getElementById("fromRow");
const roleRow = document.getElementById("roleRow");
const likeRow = document.getElementById("likeRow");

const closeBtn = document.querySelector(".close");

const buttons = document.querySelectorAll(".member-button, .founder-button");

/* ===================== */
/* OPEN */
/* ===================== */

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    modal.classList.add("show");

    modalImage.src = button.dataset.image;

    modalName.textContent = button.dataset.name;

    modalComment.textContent = button.dataset.comment;

    if(button.dataset.song){
      modalAudio.src = button.dataset.song;
      modalAudio.play();
    }

    /* 出身 */
    if(button.dataset.from){

      fromRow.style.display = "block";

      modalFrom.textContent = button.dataset.from;

    }else{

      fromRow.style.display = "none";
    }

    /* 役職 */
    if(button.dataset.role){

      roleRow.style.display = "block";

      modalRole.textContent = button.dataset.role;

    }else{

      roleRow.style.display = "none";
    }

    /* 好きなこと */
    if(button.dataset.like){

      likeRow.style.display = "block";

      modalLike.textContent = button.dataset.like;

    }else{

      likeRow.style.display = "none";
    }

  });

});



/* CLOSE */

if(closeBtn){

  closeBtn.addEventListener("click", () => {

    modal.classList.remove("show");

    modalAudio.pause();
    modalAudio.currentTime = 0;

  });

}

/* ===================== */
/* OUTSIDE CLICK */
/* ===================== */

if(modal){

  window.addEventListener("click", (e) => {

    if (e.target === modal) {

      modal.classList.remove("show");

      modalAudio.pause();
      modalAudio.currentTime = 0;

    }

  });

}

/* ===================== */
/* TOP SLIDE */
/* ===================== */

const slides = document.querySelectorAll(".slide");

let current = 0;

if(slides.length > 0){

  setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
      current = 0;
    }

    slides[current].classList.add("active");

  }, 6000);

}

/* ===================== */
/* ACTIVITY PHOTO */
/* ===================== */

const photoBtns = document.querySelectorAll(".media-btn");

const photoModal = document.getElementById("photoModal");

const photoImage = document.getElementById("photoImage");

const photoClose = document.querySelector(".photo-close");

/* OPEN */

photoBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

     // data-image を持たないボタン（=動画用リンク）は無視する
    if (!btn.dataset.image) return;

    photoModal.classList.add("show");

    photoImage.src = btn.dataset.image;

  });

});

/* CLOSE */

if(photoClose){

  photoClose.addEventListener("click", () => {

    photoModal.classList.remove("show");

  });

}

/* OUTSIDE CLICK */

window.addEventListener("click", (e) => {

  if(e.target === photoModal){

    photoModal.classList.remove("show");

  }

});

/* ===================== */
/* ACTIVITY PAGINATION */
/* ===================== */

const logs = document.querySelectorAll(".log-card");

if(logs.length){

  const perPage = 5;

  let currentPage = 1;

  const totalPages = Math.ceil(
    logs.length / perPage
  );

  function showPage(page){

    logs.forEach((log,index)=>{

      const start = (page - 1) * perPage;

      const end = start + perPage;

      if(index >= start && index < end){

        log.style.display = "flex";

      }else{

        log.style.display = "none";
      }
    });

    document.getElementById("pageInfo").textContent =
      page + " / " + totalPages;

    document.getElementById("prevPage").disabled =
      page === 1;

    document.getElementById("nextPage").disabled =
      page === totalPages;
  }

  showPage(currentPage);

  document.getElementById("nextPage").onclick = () => {

    if(currentPage < totalPages){

      currentPage++;

      showPage(currentPage);
    }
  };

  document.getElementById("prevPage").onclick = () => {

    if(currentPage > 1){

      currentPage--;

      showPage(currentPage);
    }
  };
}



let clickCount = 0;

const logo = document.getElementById("secretLogo");

if(logo){

  logo.addEventListener("click", () => {

    clickCount++;

    if(clickCount === 10){

      document
        .getElementById("secretOverlay")
        .classList.add("show");

      setTimeout(() => {

        window.location.href = "secret.html";

      }, 5000);

    }

  });

}

let archiveClickCount = 0;

const archiveLogo = document.getElementById("archiveLogo");

if(archiveLogo){

  archiveLogo.addEventListener("click", () => {

    archiveClickCount++;

    if(archiveClickCount === 5){

      document
        .getElementById("archiveOverlay")
        ?.classList.add("show");

      setTimeout(() => {

        window.location.href = "index.html";

      }, 5000);

    }

  });

}

/* ===================== */
/* NEWS PAGINATION */
/* ===================== */

const newsCards = document.querySelectorAll(".news-card");

if(newsCards.length){

  const perPage = 5;

  let currentNewsPage = 1;

  const totalNewsPages =
    Math.ceil(newsCards.length / perPage);

  function showNewsPage(page){

    newsCards.forEach((card,index)=>{

      const start = (page - 1) * perPage;

      const end = start + perPage;

      if(index >= start && index < end){

        card.style.display = "grid";

      }else{

        card.style.display = "none";
      }

    });

    const pageInfo =
      document.getElementById("newsPageInfo");

    if(pageInfo){

      pageInfo.textContent =
        page + " / " + totalNewsPages;
    }

    const prevBtn =
      document.getElementById("prevNews");

    const nextBtn =
      document.getElementById("nextNews");

    if(prevBtn){
      prevBtn.disabled = page === 1;
    }

    if(nextBtn){
      nextBtn.disabled = page === totalNewsPages;
    }
  }

  showNewsPage(currentNewsPage);

  document.getElementById("nextNews")?.addEventListener("click",()=>{

    if(currentNewsPage < totalNewsPages){

      currentNewsPage++;

      showNewsPage(currentNewsPage);
    }

  });

  document.getElementById("prevNews")?.addEventListener("click",()=>{

    if(currentNewsPage > 1){

      currentNewsPage--;

      showNewsPage(currentNewsPage);
    }

  });

}