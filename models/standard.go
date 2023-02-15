package models

import "github.com/uadmin/uadmin"

type Standard struct {
	uadmin.Model
	BackgroundImage string `uadmin:"image"`
	Title           string
	Description     string
}

func (h *Standard) String() string {
	return h.Title
}
