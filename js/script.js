// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
	if(!sidebarOpen) {
		sidebar.classList.add("sidebar-responsive");
		sidebarOpen = true;
	}
}

function closeSidebar() {
	if(sidebarOpen) {
		sidebar.classList.remove("sidebar-responsive");
		sidebarOpen = false;
	}
}

//-------CHARTS-------

//BAR CHARTS

//https://apexcharts.com/docs/chart-types/bar-chart/

//https://www.youtube.com/watch?v=ewN4_mcaI84

// Parei no 54 minutos