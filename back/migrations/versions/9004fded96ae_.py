"""empty message

Revision ID: 9004fded96ae
Revises: 
Create Date: 2020-08-10 19:59:19.114800

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9004fded96ae'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('roles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rolename', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('rolename')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('password', sa.String(length=100), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('lastname', sa.String(length=100), nullable=True),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('avatar', sa.String(length=100), nullable=True),
    sa.Column('phone', sa.String(length=12), nullable=True),
    sa.Column('createdate', sa.DateTime(), nullable=True),
    sa.Column('role_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['role_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('roles')
    # ### end Alembic commands ###
