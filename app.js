const routes = {
  "/": () => `
    <div class="page">
      <div class="sidePanel">
        <div class="LeftPanel">
          <img src="Content/black.png" />
          <hr />
          <h4 class="profile-content__category-title">Get in touch!</h4>
          <div class="links">
            <a href="https://nl.linkedin.com/in/kollin-smits-947830294" target="_blank" rel="noopener noreferrer">
              <img class="linkimage" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn">
            </a>
            <a href="mailto:kol.smits@hotmail.com">
              <img class="linkimage" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email">
            </a>
          </div>
          <hr />
          <section class="personalia">
            <div class="profile-content__category">
              <h3 style="color:white; text-transform: lowercase;">Skills</h3>
            </div>
            <div class="custom-line--skinny"></div>
            <!-- Hier komen al je skill blokken, ik laat die onveranderd -->
            ...
          </section>
        </div>
      </div>
      <div class="sidePanel">
        <section>
          <div class="divtext">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged...
          </div>
        </section>
      </div>
    </div>
  `,
  "/Experience": () => `<div class="Experiencepage">
    <div class="timeline">
        <div class="timeline-item left">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timelineheader">2025</h3> <span>april - june</span>
                <p style="font-weight: bold;">web development internship <span style="font-weight:normal;">Djurve</span></p>
            </div>
        </div>
        <div class="timeline-item right">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timelineheader">2018</h3> <span>- until 2010</span>
                <p style="font-weight: bold;">Restaurant staff <span style="font-weight:normal;">Ko Shing</span></p>
            </div>
        </div>
        <div class="timeline-item left">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timelineheader">2022</h3> <span>- until present</span>
                <p style="font-weight: bold;">bread department <span style="font-weight:normal;">Jumbo</span></p>
            </div>
        </div>
        <div class="timeline-item right">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timelineheader">2018</h3> <span>- until 2010</span>
                <p style="font-weight: bold;">Warehouse employee <span style="font-weight:normal;">DA</span></p>
            </div>
        </div>

    </div>
</div>`,
  "/Privacy": () => `<div class="text-center">
    <h1 class="display-4">Welcome</h1>
    <p>Learn about <a href="https://learn.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
</div>`,
};


function router() {
  const path = location.hash.slice(1) || "/";
  const render = routes[path] || (() => "<h1>404</h1><p>Pagina niet gevonden</p>");
  document.getElementById("body").innerHTML = render();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
