import { useState } from 'react'
import './index.scss'

const DiseaseSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    // TODO: Implement disease search API call
    // Mock data for now
    const mockResults = [
      {
        id: 1,
        name: 'Cảm cúm',
        description: 'Bệnh nhiễm trùng đường hô hấp do virus gây ra',
        symptoms: ['Sốt', 'Ho', 'Sổ mũi', 'Đau họng']
      },
      {
        id: 2,
        name: 'Viêm họng',
        description: 'Tình trạng viêm nhiễm ở vùng họng',
        symptoms: ['Đau họng', 'Khó nuốt', 'Ho khan']
      }
    ]
    setSearchResults(mockResults)
  }

  return (
    <div className='disease-search-page'>
      <div className='header'>
        <h1 className='title'>Tra cứu bệnh</h1>
      </div>

      <div className='search-section'>
        <input
          className='search-input'
          placeholder='Nhập tên bệnh hoặc triệu chứng'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className='results-section'>
        {searchResults.map(disease => (
          <div key={disease.id} className='disease-card'>
            <h2 className='disease-name'>{disease.name}</h2>
            <p className='disease-description'>{disease.description}</p>
            <div className='symptoms-section'>
              <h3 className='symptoms-title'>Triệu chứng:</h3>
              <ul className='symptoms-list'>
                {disease.symptoms.map((symptom, index) => (
                  <li key={index} className='symptom-item'>• {symptom}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiseaseSearchPage 