class EmployeeData extends HTMLElement {
    constructor(name, phone, email, imgsrc, depid){
       super();
 
       this.showData = true;
       this.attachShadow({mode: 'open'})
       this.shadowRoot.appendChild(this.#template().content.cloneNode(true));
 
       this.name = this.shadowRoot.querySelector('h3.name')
       this.name.textContent = name;
       this.phone = this.shadowRoot.querySelector('h3.phone')
       this.phone.textContent = phone;
       this.email = this.shadowRoot.querySelector('h3.email')
       this.email.textContent = email;
       this.depid = this.shadowRoot.querySelector('h3.depId')
       this.depid.textContent = depid;
       this.img = this.shadowRoot.querySelector('img')
       this.img.src = imgsrc;
    }


    #template(){
        const template = document.createElement('template')
        template.innerHTML = `
        <div class="mainInfoDiv">
            <h3 class="name"></h3>
            <h3 class="phone"></h3>
            <h3 class="email"></h3>
            <h3 class="depId"></h3>
        <img>
        </div>
        `
        return template;
    }
 }
 
 window.customElements.define('employee-data', EmployeeData);