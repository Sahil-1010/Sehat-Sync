// Selecting all relevant elements

let home = document.querySelector('.main');
let about = document.querySelector('.About');
let qna = document.querySelector('.QNA');
let terms = document.querySelector('.terms');
let privacy = document.querySelector('.privacy');
let contact=document.querySelector('.contact');
let login_opt=document.querySelector('.login_page');
let must_login=document.querySelectorAll('.btn');
let login_butt=document.querySelector('.login_butt');
let profile=document.querySelector('.profile');
let inventory=document.querySelector('.Inventory');
let data=document.querySelector('.inventory-data');
let top_doc=document.querySelector('.top');
let schedule=document.querySelector('.scheduling');
let doc=document.querySelector('.doc');
let user_profile=document.querySelector('.user_profile');
let login=false;
let userid=0;
let prof_btn=document.querySelector('#profile-btn');
let ok_emergency=document.querySelector('.it-emergency');
let register=document.querySelector('.register-data');
let user_data=document.querySelector('.user-data');

function logout(){
    prof_btn.style.display='none';
    open_login();
    login=false;
    // goBack();
}
function open_patient(){
    login=true;
    open_home();
    register.style.display='none';
    login_data();
    user_data.style.display='block';
}
let form_container=document.querySelector('.form-container');
let queue=0;
function show_data(){
    form_container.style.display='none';
    queue=1;
    open_home();
}
if (queue==1){
    setTimeout(() => {
        run_data();
      }, "1000");
    }
function open_register(){
    login=true;
    open_home();
    register.style.display='block';
    user_data.style.display='none';
    login_data();

}

function open_home(){
    home.style.display = 'block';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    login_opt.style.display='none';
    inventory.style.display='none';
    top_doc.style.display='none';
    schedule.style.display='none';
    doc.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';
}
function it_emergency(){
    login_opt.style.display='none';
    ok_emergency.style.display='block';
    home.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    login_opt.style.display='none';
    inventory.style.display='none';
    top_doc.style.display='none';
    schedule.style.display='none';
    doc.style.display='none';
    user_profile.style.display='none';
   
}
function open_contact(){
    home.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'none';    
    inventory.style.display='none';
    top_doc.style.display='none';
    schedule.style.display='none';
    doc.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';

    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='block';
    login_opt.style.display='none';

}
// Function to show the About section and hide others

function open_about() {
    home.style.display = 'none';
    about.style.display = 'block';
    qna.style.display = 'none';
    inventory.style.display='none';    
    doc.style.display='none';
    ok_emergency.style.display='none';

    top_doc.style.display='none';
    schedule.style.display='none';

    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    login_opt.style.display='none';
    user_profile.style.display='none';

}

// Function to show the QNA section and hide others
function open_QNA() {
    home.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'block';
    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    login_opt.style.display='none';
    inventory.style.display='none';
    doc.style.display='none';
    schedule.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';



}

// Function to show the Terms section and hide others
function open_terms() {
    home.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'block';
    privacy.style.display = 'none';
    contact.style.display='none';
    login_opt.style.display='none';
    inventory.style.display='none';
    schedule.style.display='none';
    doc.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';



}

// Function to show the Privacy section and hide others
function open_privacy() {
    home.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'none';
    privacy.style.display = 'block';
    contact.style.display='none';
    login_opt.style.display='none';
    inventory.style.display='none';
    schedule.style.display='none';
    doc.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';



}

function open_login(){
    login_opt.style.display='block';
    home.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    inventory.style.display='none';
    schedule.style.display='none';
    doc.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';   
}
let hero=document.querySelector('.hero');
let specailist=document.querySelector('.specailist');
let features=document.querySelector('.features');

function open_inventory(){
    inventory.style.display='block';
    login_opt.style.display='none';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    top_doc.style.display='none';
    schedule.style.display='none';
    doc.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';
    home.style.display='none';
    hero.style.display = 'block';

}
function open_inventory_register(){
    inventory.style.display='block';
    login_opt.style.display='none';
    hero.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    top_doc.style.display='none';
    schedule.style.display='none';
    doc.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';
    register.style.display='block';
    user_data.style.display='none';
    features.style.display='none';
    specailist.style.display='none';
    alert('Searching Data Base...');
}

function op_submit(event) {
    event.preventDefault(); // Prevent form submission
    data.style.display = 'block';
}
// function change_data(userid){

// }
function goBack() {
    window.history.back();
    open_home();
    // login_data();
}
// function emergency(){
//     login=true;
//     login_data();
//     open_home();
//     profile.style.display='none';
// }
function login_data() {
    if (login === false) {
        open_login();
        profile.style.display='none';
        login_butt.style.display='block';

        // open_home();
    }
    else{
        login_butt.style.display='none';
        profile.style.display='block';
        // change_data(userid);
    }
}
function open_top(){
    home.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    login_opt.style.display='none';
    inventory.style.display='none';
    top_doc.style.display='block';
    schedule.style.display='none';
    doc.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';

}
function open_schedule(){
    schedule.style.display='block';
    home.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    login_opt.style.display='none';
    inventory.style.display='none';
    top_doc.style.display='none';
    doc.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';

}
function open_doc(){
    doc.style.display='block';
    schedule.style.display='none';
    home.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    login_opt.style.display='none';
    inventory.style.display='none';
    top_doc.style.display='none';
    user_profile.style.display='none';
    ok_emergency.style.display='none';

}

let state=true;
function open_profile(){
    state=false;
    user_profile.style.display='block';
    doc.style.display='none';
    schedule.style.display='none';
    home.style.display = 'none';
    about.style.display = 'none';
    qna.style.display = 'none';
    terms.style.display = 'none';
    privacy.style.display = 'none';
    contact.style.display='none';
    login_opt.style.display='none';
    inventory.style.display='none';
    top_doc.style.display='none';
    ok_emergency.style.display='none';

}

// prof_btn.addEventListener("click",()=>{

//     if(state){
//         open_profile();
//     }
//     else{
//         open_home();
//     }
// })
// function close_profile(){

// }
// Add event listeners to each button
must_login.forEach(button => {
    // Check if the button does not have the 'super' class
    if (!button.classList.contains('super')) {
        button.addEventListener('click', login_data); // Add click event listener
    }
});

// login_data();

const delhiBounds = {
    minLat: 28.4041,
    maxLat: 28.8798,
    minLng: 76.8422,
    maxLng: 77.3459
  };
  
  function getRandomDelhiLocation() {
    const lat = Math.random() * (delhiBounds.maxLat - delhiBounds.minLat) + delhiBounds.minLat;
    const lng = Math.random() * (delhiBounds.maxLng - delhiBounds.minLng) + delhiBounds.minLng;
    return { lat, lng };
  }

document.getElementById('getLocation').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showHospitals, showError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});
document.getElementById('getLocation').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showHospitals, showError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

function showHospitals(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // Check if the user is in Delhi (latitude and longitude bounds of Delhi)
    const isInDelhi = (lat >= 28.4041 && lat <= 28.8798) && (lng >= 76.8422 && lng <= 77.3459);

    // if (!isInDelhi) {
    //     alert('You are not in the correct location. This service is only available in Delhi.');
    //     return;
    // }

    // Example list of hospitals (Replace with an actual API call if needed)
    const hospitals = [
        { name: 'AIIMS Hospital', availableBeds: Math.floor(Math.random() * 100), distance: (Math.random() * 10).toFixed(2) },
        { name: 'Safdarjung Hospital', availableBeds: Math.floor(Math.random() * 100), distance: (Math.random() * 10).toFixed(2) },
        { name: 'Fortis Hospital', availableBeds: Math.floor(Math.random() * 100), distance: (Math.random() * 10).toFixed(2) },
        { name: 'Max Hospital', availableBeds: Math.floor(Math.random() * 100), distance: (Math.random() * 10).toFixed(2) },
        { name: 'Apollo Hospital', availableBeds: Math.floor(Math.random() * 100), distance: (Math.random() * 10).toFixed(2) }
    ];

    // Display the list of hospitals with radio buttons
    const hospitalList = document.getElementById('hospitals');
    hospitalList.innerHTML = ''; // Clear previous results

    hospitals.forEach((hospital, index) => {
        const li = document.createElement('li');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'hospital';
        radio.value = hospital.name;
        radio.id = `hospital${index}`;

        const label = document.createElement('label');
        label.htmlFor = `hospital${index}`;
        label.textContent = `${hospital.name} - Available Beds: ${hospital.availableBeds} - Distance: ${hospital.distance} km`;

        li.appendChild(radio);
        li.appendChild(label);
        hospitalList.appendChild(li);
    });

    document.getElementById('hospital-list').style.display = 'block';
    document.getElementById('submitButton').style.display = 'block';
    document.getElementById('bookAmbulanceButton').style.display = 'block';
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            alert('An unknown error occurred.');
            break;
    }
}

document.getElementById('hospitalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedHospital = document.querySelector('input[name="hospital"]:checked');
    if (selectedHospital) {
        alert(`You selected: ${selectedHospital.value}`);
    } else {
        alert('Please select a hospital.');
    }
});

// Functionality for the "Book Ambulance" button
document.getElementById('bookAmbulanceButton').addEventListener('click', function() {
    const selectedHospital = document.querySelector('input[name="hospital"]:checked');
    if (selectedHospital) {
        // Here you can implement the actual logic to book an ambulance, e.g., calling an API.
        alert(`An ambulance has been booked from ${selectedHospital.value}`);
    } else {
        alert('Please select a hospital to book an ambulance.');
    }
});


//   document.getElementById('getLocation').addEventListener('click', function() {
//     navigator.geolocation.getCurrentPosition(position => {
//       showHospitals(position);
//     });
//   });
//   const apiUrl = 'https://api.opencage.com/geocode/v1/json';
//   const apiKey = '2be9bcd51cbb40f3978620be6fe341bb';
  
//   function showHospitals(position) {
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
  
//     const request = {
//       q: `hospital near ${lat},${lng}`,
//       radius: 10000, // 10km
//       key: apiKey
//     };
  
//     fetch(`${apiUrl}?${new URLSearchParams(request)}`)
//       .then(response => response.json())
//       .then(data => {
//         const hospitals = data.results.map(result => result.components.find(component => component.types.includes('hospital')).name);
  
//         // Display the list of hospitals
//         const hospitalList = document.getElementById('hospitals');
//         hospitalList.innerHTML = ''; // Clear previous results
  
//         hospitals.forEach(hospital => {
//           const li = document.createElement('li');
//           li.textContent = hospital;
//           hospitalList.appendChild(li);
//         });
  
//         document.getElementById('hospital-list').style.display = 'block';
//       })
//       .catch(error => console.error(error));
//   }

//   fetch(`${apiUrl}?${new URLSearchParams(request)}`, {
//     timeout: 10000 // increase timeout to 10 seconds
//   })
// document.getElementById('getLocation').addEventListener('click', function() {
//     console.log('Button clicked!');
//     if (navigator.geolocation) {
//       console.log('Geolocation supported!');
//       navigator.geolocation.getCurrentPosition(showHospitals, showError);
//     } else {
//       console.log('Geolocation not supported!');
//       alert('Geolocation is not supported by this browser.');
//     }
//   });
  
//   function showHospitals(position) {
//     console.log('Got position!');
//     try {
//       const lat = position.coords.latitude;
//       const lng = position.coords.longitude;
  
//       // Check if user is in Delhi (latitude and longitude bounds of Delhi)
//       const isInDelhi = (lat >= 28.4041 && lat <= 28.8798) && (lng >= 76.8422 && lng <= 77.3459);
  
//       if (!isInDelhi) {
//         alert('You are not in the correct location. This service is only available in Delhi.');
//         return;
//       }
  
//       // Example list of hospitals (Replace with an actual API call if needed)
//       const hospitals = [
//         'AIIMS Hospital, New Delhi',
//         'Safdarjung Hospital, New Delhi',
//         'Fortis Hospital, New Delhi',
//         'Max Hospital, New Delhi',
//         'Apollo Hospital, New Delhi'
//       ];
  
//       // Display the list of hospitals
//       const hospitalList = document.getElementById('hospitals');
//       hospitalList.innerHTML = ''; // Clear previous results
  
//       hospitals.forEach(hospital => {
//         const li = document.createElement('li');
//         li.textContent = hospital;
//         hospitalList.appendChild(li);
//       });
  
//       document.getElementById('hospital-list').style.display = 'block';
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   function showError(error) {
//     console.error('Error:', error);
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         alert('User denied the request for Geolocation.');
//         break;
//       case error.POSITION_UNAVAILABLE:
//         alert('Location information is unavailable.');
//         break;
//       case error.TIMEOUT:
//         alert('The request to get user location timed out.');
//         break;
//       case error.UNKNOWN_ERROR:
//         alert('An unknown error occurred.');
//         break;
//     }
//   }
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.patient');
    const submitButton = document.getElementById('submit-btn');
    const resetButton = document.getElementById('reset-btn');
    const fileUpload = document.getElementById('file-upload');
    const timeDisplay = document.getElementById('current-time');
    const hospitalSelect = document.getElementById('hospital-select');
    const doctorSelect = document.getElementById('doctor-select');
    const updateHospitalDoctorButton = document.getElementById('update-hospital-doctor');
    const lateButtons = document.querySelectorAll('.late-btn');
    const userList = document.getElementById('user-list');

    // Function to update time dynamically
    function updateTime() {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        timeDisplay.textContent = formattedTime;
    }

    // Update time every second
    setInterval(updateTime, 1000);

    // Handle "Late" button click event
    lateButtons.forEach(button => {
        button.addEventListener('click', function () {
            const userItem = this.parentElement;
            userList.appendChild(userItem);  // Move user item to the end of the list
        });
    });

    // Handle update button click event
    submitButton.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const userItem = checkbox.parentElement;
                const label = userItem.querySelector('label');
                const statusLabel = userItem.querySelector('.status-label');
                
                label.classList.add('strikethrough');  // Strike through text
                // statusLabel.textContent = Math.random() > 0.5 ? 'Paid' : 'Not Paid';  // Randomly assign 'Paid' or 'Not Paid'
                
                // Disable the user item
                userItem.classList.add('disabled');
                checkbox.disabled = true;
                userItem.querySelector('.late-btn').disabled = true;
            }
        });
    });

    // Handle reset button click event
    resetButton.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;  // Uncheck all checkboxes
            checkbox.disabled = false;  // Enable all checkboxes

            const userItem = checkbox.parentElement;
            const label = userItem.querySelector('label');
            const statusLabel = userItem.querySelector('.status-label');
            const lateButton = userItem.querySelector('.late-btn');

            label.classList.remove('strikethrough');  // Remove strike through
            // statusLabel.textContent = '';  // Clear status labels
            lateButton.disabled = false;  // Enable all late buttons
            userItem.classList.remove('disabled');  // Remove disabled state
        });
    });

    // Handle file input change event
    fileUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`Selected file: ${file.name}`);
        }
    });

    // Handle hospital and doctor update button click event
    updateHospitalDoctorButton.addEventListener('click', () => {
        const selectedHospital = hospitalSelect.value;
        const selectedDoctor = doctorSelect.value;
        alert(`Selected Hospital: ${selectedHospital}, Selected Doctor: ${selectedDoctor}`);
    });
});


// Wait for the DOM to load
function check_data(){
    if (login==true &&  queue==1){
    run_data();
    queue=2;
    }
    else{
        alert('Book an appointment first');
        open_schedule();
    }
    // alert('run');
}
const progressBar = document.getElementById('progress-fill');
const progressValue = document.getElementById('progress-value');
const queuePositionElement = document.getElementById('queue-position');
const nextMessage = document.getElementById('next-message');
const userTokenElement = document.getElementById('user-token');
const progressDone = document.querySelector('.h5');

// Create an audio element
const audio = new Audio('fairydust.mp3');

// Animate progress bar from 70% to 100% over 3 seconds
let progress = 70;
function run_data(){
    // Get references to HTML elements
   
    const progressInterval = setInterval(() => {
      if (progress < 100) {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        progressValue.textContent = `${progress}%`;
        if (progress === 100) {
          progressDone.innerText = 'Done';
        }
      } else {
        clearInterval(progressInterval);
      }
    }, 30); // Update every 30ms (3000ms/100 increments = 30ms per increment)
  
    // Generate a random token from 1 to 10 and display it
    const randomToken = Math.floor(Math.random() * 10) + 1;
    userTokenElement.textContent = randomToken;
  
    // Initialize queue position and update it every 5 seconds
    let queuePosition = 0;
    const queueInterval = setInterval(() => {
      if (queuePosition <= 10) {
        queuePositionElement.textContent = queuePosition;
  
        // Check if queue position matches random token
        if (queuePosition === randomToken-1) {
          nextMessage.classList.remove('hidden');
          nextMessage.classList.add('visible');
  
          // Play audio
          audio.play();
        } else {
          nextMessage.classList.remove('visible');
          nextMessage.classList.add('hidden');
        }
        queuePosition++;
      } else {
        clearInterval(queueInterval);
      }
    }, 3000); // Update every 5 seconds
}
