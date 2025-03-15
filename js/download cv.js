<button id="downloadBtn" class="btn">Download CV</button>


  document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "SumairaAmjadResume.pdf"; // Update with your actual file path
    link.download = "SumairaAmjadResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

