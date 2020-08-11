var apiKey = "S0q6EVR2";

$.ajax({
  headers: {
    "X-Access-Token": apiKey
  },
  method: 'POST',
  url: "https://sgt.lfzprototypes.com/api/grades",
  data: {
    "name": "Jane Doe",
    "course": "Math 101",
    "grade": 100
  },
  success: function (response) {
    console.log(response);
  },
  error: function (error) {
    console.log(error);
  }
})
