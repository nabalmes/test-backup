package models

import "github.com/uadmin/uadmin"

type Lofts struct {
	uadmin.Model
	BackgroundImage string `uadmin:"image"`
	Title           string
	Description     string
}

func (h *Lofts) String() string {
	return h.Title
}
