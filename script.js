function loadApp(url) {
      document.getElementById('mainGrid').style.display = 'none';
      document.getElementById('backBtn').style.display = 'block';
      var frame = document.getElementById('appFrame');
      frame.src = url;
      frame.style.display = 'block';
    }
    function goBack() {
      document.getElementById('mainGrid').style.display = 'grid';
      document.getElementById('backBtn').style.display = 'none';
      var frame = document.getElementById('appFrame');
      frame.src = '';
      frame.style.display = 'none';
    }