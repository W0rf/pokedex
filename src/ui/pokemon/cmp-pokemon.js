import React, { PureComponent } from 'react'

class Pokemon extends PureComponent {
  render() {
    const { pokemon } = this.props
    return (
      <div className="pokemon">
        <p className="float-left small text-danger text-uppercase font-weight-bold">
          #{pokemon.id}
        </p>
        <button
          type="button"
          className="pokemon__sprite"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`})`
          }}
        />
        <h4 className="pokemon__name text-white font-weight-bold">
          {pokemon.name}
        </h4>
      </div>
    )
  }
}

export default Pokemon
