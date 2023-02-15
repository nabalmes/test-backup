package models

import "github.com/uadmin/uadmin"

type Cafẽ struct {
	uadmin.Model
	BackgroundImage string `uadmin:"image"`
	Title           string
	Description     string
}

func (h *Cafẽ) String() string {
	return h.Title
}
