import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';

import Box from 'react-bulma-companion/lib/Box';
import Media from 'react-bulma-companion/lib/Media';
import Content from 'react-bulma-companion/lib/Content';
import Level from 'react-bulma-companion/lib/Level';
import Icon from 'react-bulma-companion/lib/Icon';
import { useNavigate } from 'react-router';
import { attemptDeleteItem } from '_store/thunks/items';
import ConfirmDeleteModal from '_components/organisms/ConfirmDeleteModal';

export default function Item({ id, name, description, price, withoutInventory, canBeShipped, createdAt, updatedAt }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(false);

  const openModal = () => setConfirm(true);
  const closeModal = () => setConfirm(false);

  const deleteItem = () => dispatch(attemptDeleteItem(id));
  const editItem = () => navigate('/edit_inventory', { state: { item: {
    id, name, description, price, withoutInventory, canBeShipped, createdAt, updatedAt } } });

  return (
    <Box className="todo searchable" component="li">
      <Media>
        <Media.Left />
        <Media.Content>
          <Content>
            <p>
              <small>
                {name}
              </small>
            </p>
            <p>
              {description}
              {price}
              {withoutInventory}
              {canBeShipped}
              {createdAt}
              {updatedAt}
            </p>
          </Content>

          <Level mobile>
            <Level.Left />
            <Level.Right>
              <Icon className="space-right" onClick={editItem} onKeyPress={editItem}>
                <FontAwesomeIcon icon={faPencil} size="lg" />
              </Icon>
              <Icon onClick={openModal} onKeyPress={null}>
                <FontAwesomeIcon icon={faTrashCan} size="lg" />
              </Icon>
            </Level.Right>
          </Level>
        </Media.Content>
      </Media>
      <ConfirmDeleteModal
        confirm={confirm}
        closeModal={closeModal}
        deleteFunction={deleteItem}
      />
    </Box>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number,
  withoutInventory: PropTypes.bool,
  canBeShipped: PropTypes.bool,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
};
Item.defaultProps = {
  updatedAt: null,
  createdAt: null,
  description: '',
  price: null,
  withoutInventory: false,
  canBeShipped: false,
};
