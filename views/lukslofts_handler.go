package views

import (
	"net/http"
	"strings"

	"github.com/uadmin/uadmin"
)

func LuksloftsHandler(w http.ResponseWriter, r *http.Request) {

	page := strings.TrimPrefix(r.URL.Path, "/")
	context := map[string]interface{}{}

	//* Admin
	switch page {
	case "index":
		context = Index(w, r)
	case "standard":
		context = Standard(w, r)
	case "lofts":
		context = Lofts(w, r)
	case "cafe":
		context = Cafẽ(w, r)
	case "spa":
		context = Spa(w, r)
	case "activities":
		context = Activities(w, r)
	case "safety":
		context = Safety(w, r)
	case "policy":
		context = Policy(w, r)
	case "location":
		context = Location(w, r)
	case "gallery":
		context = Gallery(w, r)
	case "contact":
		context = Contact(w, r)
	case "careers":
		context = Careers(w, r)
	default:
		page = "index"
		context = Index(w, r)
	}

	RenderInterface(w, r, page, context)
}

func RenderInterface(w http.ResponseWriter, r *http.Request, page string, context map[string]interface{}) {
	templateList := []string{}
	templateList = append(templateList, "./templates/base.html")

	path := "./templates/" + page + ".html"
	templateList = append(templateList, path)
	uadmin.Trail(uadmin.DEBUG, "PAGE: %v", templateList)

	uadmin.RenderMultiHTML(w, r, templateList, context)
}
