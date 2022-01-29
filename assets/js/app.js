AOS.init();

function appendBody(data) {
    let html = '';

    data.forEach(obj => {
        html += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="30"
            data-aos-duration="1000">

                <div class="card border-success ">
                    <div class="card-header text-center">
                        ${obj.title}
                    </div>
                    <div class="card-body border-bottom p-1">
                        <img src="${obj.img}" alt="My Blog Demo" class="w-100">
                    </div>
                    <a class="btn btn-outline-primary btn-sm border-0 stretched-link" role="button"
                        href="${obj.link}" target="_blank"
                        class="card-link demo-view">${obj.click}</a>
                </div>
            </div>
            `;
    });

    document.querySelector('#content').innerHTML = html;
}

window.onload = function(e) {

    fetch('assets/json/english.json').then((response) => {
      return response.json();
    }).then((data) => {
        appendBody(data);
    }).catch((err) => {
      alert('Application Error. Restart App.');
    });


  };