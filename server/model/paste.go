package model

import (
	"errors"
	"fmt"

	"gorm.io/gorm"
)

func (d *DB) GetPaste(id int) (*Paste, error) {
	var paste Paste
	err := d.db.First(&paste, id).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}

		return nil, fmt.Errorf("failed to get paste: %v", err)
	}

	return &paste, nil
}
