package views

import "net/http"

func Spa(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Spa | Lukslofts"
	return context
}
