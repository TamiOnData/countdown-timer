const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

    function updateCountdown() {
      const currentDate = new Date();
      const distance = targetDate - currentDate;
      if (distance <= 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown').innerHTML = 'Countdown Over!';
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
      }
    }

    const timerInterval = setInterval(updateCountdown, 1000);

    const endDate = targetDate.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', });
      document.getElementById('giveaway-message').innerHTML = `Giveaway Ends On ${endDate} at 11:30am`;