// this is the data source
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var subject_mon = ['111Homeroom', 'Social Studies', 'BREAK' , 'English', 'BREAK', 'Bahasa Indonesia', 'Science'];
var subject_tues = ['222Homeroom', 'English', 'BREAK' , 'PKN', 'BREAK', 'Math', 'Arts'];
var subject_wed = ['333Homeroom', 'Science', 'BREAK' , 'English', 'BREAK', 'Bahasa Indonesia', 'Math'];
var subject_thur = ['444Homeroom', 'Math', 'BREAK' , 'Art', 'BREAK', 'Physical Education', 'English'];
var subject_fri = ['555Homeroom', 'Chinese', 'BREAK' , 'Math', 'BREAK', 'Religion', 'CAS'];
var details_mon = ['None', 'Homework', ' ', 'Quiz', ' ', 'None', 'Lab Experiment'];
var details_tues = ['None', 'Speaking Test', ' ', 'Homework', ' ', 'Quiz', 'Process Journal'];
var details_wed = ['None', 'Homework', ' ', 'Process Journal', ' ', 'None', 'Test'];
var details_thur = ['None', 'Homework', ' ', 'Process Journal', ' ', 'None', 'Homework'];
var details_fri = ['None', 'Spelling and Dictation Quiz', ' ', 'Test', ' ', 'None', 'Update Process Journal/Reflection'];
var time = ['7:40 - 8:00', '8:00 - 9:20', '9:20 - 10:00', '10:00 - 11:20', '11:20 - 12:20', '12:20 - 13:40', '13:40 - 15:00']


// This controls the weekday buttons
function fill_id_with_content(x) {
	var content = '';
	for (var i=0; i < days.length; i++) {
		content = content + '<div class="weekday" onclick="load_each_day(\'' + days[i] + '\', \'timetable\')">' + days[i] + '</div>';
	}
	document.getElementById(x).innerHTML = content;
}


// This will control the schedule of each day, divided to time, subject, and subject details
function load_each_day(a, put_it_where) {
	switch(a) {
	case (a = 'Monday'):
		var schedule = '' ;
		for (var i=0; i < subject_mon.length; i++) {
		schedule = schedule + '<div class="dayClass"><h2>' + time[i] + '  ' + subject_mon[i] + '</h2><p>' + details_mon[i] + '</div>';
	}
	break;
	case (a = 'Tuesday'):
		var schedule = '' ;
		for (var i=0; i < subject_tues.length; i++) {
		schedule = schedule + '<div class="dayClass"><h2>' + time[i] + '  ' + subject_tues[i] + '</h2><p>' + details_tues[i] + '</div>';
	}
	break;
	case (a = 'Wednesday'):
			var schedule = '' ;
		for (var i=0; i < subject_wed.length; i++) {
		schedule = schedule + '<div class="dayClass"><h2>' + time[i] + '  ' + subject_wed[i] + '</h2><p>' + details_wed[i] + '</div>';
	}
	break;
	case (a = 'Thursday'):
		var schedule = '' ;
		for (var i=0; i < subject_thur.length; i++) {
		schedule = schedule + '<div class="dayClass"><h2>' + time[i] + '  ' + subject_thur[i] + '</h2><p>' + details_thur[i] + '</div>';
	}
	break;
	case (a = 'Friday'):
		var schedule = '' ;
		for (var i=0; i < subject_fri.length; i++) {
		schedule = schedule + '<div class="dayClass"><h2>' + time[i] + '  ' + subject_fri[i] + '</h2><p>' + details_fri[i] + '</div>';
	}
	break;
	}

	var content_day = '<h3 onclick="fill_id_with_content(\'timetable\')">BACK</h3><h1>' + a + '</h1>' + schedule ;
	document.getElementById(put_it_where).innerHTML = content_day;
}


// this one controls the loading process of the window
window.onload = function() {
	setTimeout(function(){ 
		document.getElementById('loader').style.display = 'none';
		fill_id_with_content('timetable');
	}, 750);
}
