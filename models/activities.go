package models

import "github.com/uadmin/uadmin"

type Activities struct {
	uadmin.Model
	BackgroundImage string `uadmin:"image"`
	Title           string
	Description     string
}

func (h *Activities) String() string {
	return h.Title
}
