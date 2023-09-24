import data from '../projects.json' ;

function get_random_quote(){
    return data.quotes[Math.floor(Math.random() * data.quotes.length)];
}

const quote = get_random_quote();
document.getElementById("quote").innerHTML =`
    ${quote.en} <br />
    - ${quote.author}
`;
const softSkills = data.skills.soft;
// console.log(softSkills);
softSkills.forEach((skill)=>{
    const list = document.createElement("li");
    list.innerText = skill;
    document.getElementById("soft-skill").appendChild(list);
});

const syntax = data.skills.syntax;

syntax.forEach((lan)=>{
    const list = document.createElement("li");
    list.innerText = lan;
    document.getElementById("syntax").appendChild(list);
});

const projects = data.projects;

projects.forEach(project => {
    const external_link = "./assets/external-link-0ae89760.svg";
    const repo_inner_div = document.createElement("div");
    repo_inner_div.classList.add("repository-head");
    repo_inner_div.innerHTML = `
    <a
    href="${project.link}"
    target="_blank"
    rel="Refayth Hossain"
  >
    <h3>${project.title}</h3>
  </a>
    `;
    repo_inner_div.innerHTML += `<a
    href="${project.link}"
    target="_blank"
    rel="Refayth Hossain"
    >
    <img
      width="16"
      height="16"
      src="${external_link}"
      alt="external-link"
    />
  </a>`;
    const repo = document.createElement("div");
    repo.classList.add("repository-container");    
    repo.appendChild(repo_inner_div);
    const para = document.createElement("p");
    para.classList.add("repository-description");
    para.innerText =project.description;
    repo.appendChild(para)
    const lang = document.createElement("div");
    lang.classList.add("repository-language-used-container");
    project.language.forEach((syntax)=>{
        const language_span = document.createElement("span");
        language_span.classList.add("language-used");
        language_span.innerText = syntax;
        lang.appendChild(language_span);
    });
    repo.appendChild(lang);
    document.getElementById("project-list").appendChild(repo);
});