function sendNotification(msg) {
	var notification = Notification || mozNotification || webkitNotification;

	if ('undefined' === typeof notification) {
		alert("Notificaciones no soportadas");
	} else {
		notification.requestPermission(function(permission) {
			if (Notification.permission === "granted"){
				var notification = new Notification(msg, options);
			}
		});
	}
}