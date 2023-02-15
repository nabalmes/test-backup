package views

import "net/http"

func Policy(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Policy | Lukslofts"
	return context
}
