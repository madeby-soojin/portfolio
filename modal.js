const projects = {
  project1: { type: 'image', image: 'img/p1.jpg' },
  project2: { type: 'image', image: 'img/p2.jpg' },
  project3: { type: 'image', image: 'img/p3.jpg' },
  project4: { type: 'image', image: 'img/p4.jpg' },
  project5: { type: 'image', image: 'img/p5.jpg' },
  project6: { type: 'image', image: 'img/p6.jpg' },
  project7: { type: 'image', image: 'img/p7.jpg' },
  project8: {
    type: 'web',
    image: 'img/box8.jpg',
    title: 'Cafe24 Shopping Mall Edit',
    period: '2026. 03. 24',
    output: 'Photoshop, Cafe24(HTML/CSS)',
    overview: "수많은 색으로 뒤덮인 트렌드 속에서 변하지 않는 무채색의 가치를 제안하는 클래식 슈즈 편집숍 'MONO STEP'입니다. 모던 시크와 미니멀 감성을 담은 흑백(Monochrome) 톤앤매너를 바탕으로, '절제미(Less is More)'가 돋보이도록 쇼핑몰을 리디자인했습니다.",
    pdfLink: 'ShoppingMall_Design.pdf',
    webLink: 'https://o537845165.cafe24.com'
  },
  project9: {
    type: 'web',
    image: 'img/box9.jpg',
    title: 'Web page Publishing',
    period: '2026. 04. 07',
    output: 'HTML5, CSS3, Photoshop',
    overview: "프리미엄 수면 전문 브랜드 '시몬스(SIMMONS)'의 웹사이트 리뉴얼 프로젝트입니다. 갤러리를 둘러보는 듯한 감각적인 와이드 레이아웃과 여백(White Space)을 활용하여 안락함과 프리미엄 무드를 극대화했으며, 웹 표준에 맞춘 시맨틱 마크업으로 반응형 웹을 구현했습니다.",
    pdfLink: 'Simmons_Renewal.pdf',
    webLink: 'https://madeby-soojin.github.io/simmons/index.html'
  }
};

function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  if (project.type === 'image') {
    modalBody.innerHTML = `
      <img src="${project.image}" alt="Portfolio Image">
      <div class="modal-btn-wrap">
        <button class="modal-close-btn" onclick="closeModal()">Close Window</button>
      </div>
    `;
  } else if (project.type === 'web') {
    modalBody.innerHTML = `
      <div class="web-modal-container">
        <div class="web-modal-img">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="web-modal-info">
          <h3>${project.title}</h3>
          <p class="web-meta"><b>Period :</b> ${project.period}</p>
          <p class="web-meta"><b>Output :</b> ${project.output}</p>
          <div class="web-overview">
            <b>OVERVIEW :</b>
            <p>${project.overview}</p>
          </div>
          <div class="web-btn-group">
            <a href="${project.pdfLink}" target="_blank" class="btn">기획서 보기</a>
            <a href="${project.webLink}" target="_blank" class="btn">사이트 이동</a>
          </div>
        </div>
      </div>
      <div class="modal-btn-wrap" style="padding-top: 0;">
        <button class="modal-close-btn" onclick="closeModal()">Close Window</button>
      </div>
    `;
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};