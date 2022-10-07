   async function showEmployee(name, element){
      if(name === element.name) {
         let phone = element.phone;
         let email = element.email;
         let imgsrc = `img/${element.img}.jpg`;
         let depId = element.department_id;
         div.innerHTML = '';
         div.appendChild(new EmployeeData(name, phone, email, imgsrc, depId))
         //div.innerHTML = `<h3>Phone: ${phone}</h3> <h3>Email: ${email}</h3> <img src="${imgsrc}"> <h3>Department ID: ${depId}</h3>`
      }
   }

   async function employeeButton(e){
      const newRes = await fetch('/api/employees');
      const newData = await newRes.json();
      if(e.target.classList.contains('log')){
         let name = e.target.parentNode.querySelector('span').textContent
         newData.forEach(element => {
            showEmployee(name, element)
         });
      }
      else if (e.target.classList.contains('ban')){

         let name = e.target.parentNode.querySelector('span').textContent
         newData.forEach(element => {
            deleteEmployee(name, element.name, element.id)

         });
         e.target.parentNode.remove();
      }
   }

   async function formButton(e){
      e.preventDefault()

      const name = document.querySelector('[name="name"]').value
      const email = document.querySelector('[name="email"]').value
      const phone = document.querySelector('[name="phone-number"]').value
      const dep_id = document.querySelector('[name="department-id"]').value
      const img = document.querySelector('[name="img"]').value
      
      await fetch('/api/employees/', {method: 'POST', body: JSON.stringify({name: name, email: email, phone: phone, department_id: dep_id, img: img})})
      ul.innerHTML = '';
      console.log(data)
      const newRes = await fetch('/api/employees');
      const newData = await newRes.json();
      newData.forEach(element => {
         ul.innerHTML += `<li class="listItem"><span>${element.name}</span><button class="log">Show</button><button class="ban">Banish</button></li>`
      });
   }