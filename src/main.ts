import "./style/style.scss";

const projectLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".tabs-item__link");
const projectTabs: NodeListOf<HTMLElement> = document.querySelectorAll(".tab-content");
const tabContentContainer: HTMLDivElement = document.querySelector(".tab-content__container") as HTMLDivElement;

const shiftTabs = (linkId: string) => {
  projectTabs.forEach((tab, i) => {
    if (tab.id.includes(linkId)) {
      projectTabs.forEach((tabItem) => {
        tabItem.style.transform = `translateY(-${i * 100}vh)`;
      });
    }
  });
};

projectLinks.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault(); 

    const linkId = element.id;
    const hrefLinkClick = element.href;

    projectLinks.forEach((link, i) => {
      if (link.href === hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    shiftTabs(linkId);
  });
});

const currentHash = window.location.hash;
const activeLink = document.querySelector(".tabs-item__link");
if (currentHash && activeLink) {
  const visibleHash = document.getElementById(`${currentHash.replace("#", "")}`);
  if (visibleHash) {
    activeLink.classList.toggle("active");
  }
}





