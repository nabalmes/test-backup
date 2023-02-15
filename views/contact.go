package views

import "net/http"

func Contact(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Contact | Lukslofts"
	return context
}
