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
    title: 'E-Commerce | MONO STEP 클래식 슈즈 쇼핑몰',
    period: '2026. 03. 24',
    output: 'Photoshop, Cafe24(HTML/CSS)',
    overview: "수많은 색으로 뒤덮인 트렌드 속에서 변하지 않는 무채색의 가치를 제안하는 클래식 슈즈 전문 편집숍 'MONO STEP' 쇼핑몰 구축 프로젝트입니다. 모던 시크 감성의 흑백 톤앤매너와 사용자의 구매 동선을 고려한 상세 페이지 설계를 통해 브랜드 신뢰도를 높였습니다.",
    pdfLink: '최수진_쇼핑몰편집.pdf',
    webLink: 'https://o537845165.cafe24.com'
  },
  project9: {
    type: 'web',
    image: 'img/box9.jpg',
    title: 'Web Renewal | SIMMONS 프리미엄 수면 브랜드 웹 리뉴얼',
    period: '2026. 04. 18',
    output: 'Photoshop, Visual Studio Code',
    overview: "시몬스만의 세련된 아이덴티티를 디지털 환경에 맞춰 직관적으로 재해석한 웹사이트 리뉴얼 프로젝트입니다. 퍼블리싱 효율을 고려한 시맨틱 마크업 설계와 여백을 활용한 와이드 레이아웃을 통해 브랜드 특유의 프리미엄 무드를 극대화했습니다.",
    pdfLink: '최수진_디지털 출판.pdf',
    webLink: 'https://o537845165.github.io/simmons/'
  }
};

function openModal(projectId) {
  const project = projects[projectId];
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');

  if (!modal || !modalContent) return;

  if (project.type === 'image') {
    modalContent.innerHTML = `<img src="${project.image}" style="width:100%; display:block;">`;
  } else {
    modalContent.innerHTML = `
      <div class="web-modal-container">
        <div class="web-modal-left">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="web-modal-right">
          <h2 class="web-title">${project.title}</h2>
          <p class="web-meta"><b>Period :</b> ${project.period}</p>
          <p class="web-meta"><b>Output :</b> ${project.output}</p>
          <div class="web-overview">
            <b>OVERVIEW :</b>
            <p>${project.overview}</p>
          </div>
          <div class="web-btn-group">
            <a href="${project.pdfLink}" target="_blank" rel="noopener noreferrer" class="btn">기획서 보기</a>
            <a href="${project.webLink}" target="_blank" rel="noopener noreferrer" class="btn">사이트 이동</a>
          </div>
        </div>
      </div>
      <div class="modal-btn-wrap">
        <button id="modalClose" class="modal-close-btn" onclick="closeModal()">Close Window</button>
      </div>
    `;
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  setTimeout(() => {
    document.getElementById('modalClose')?.focus();
  }, 100);
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function () {
  if (!backToTopBtn) return;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}