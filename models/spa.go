package models

import "github.com/uadmin/uadmin"

type Spa struct {
	uadmin.Model
	BackgroundImage string `uadmin:"image"`
	Title           string
	Description     string
}

func (h *Spa) String() string {
	return h.Title
}
