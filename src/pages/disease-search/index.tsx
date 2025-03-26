import React, { useState } from 'react'
import './index.scss'

interface Disease {
  id: number;
  name: string;
  description: string;
  symptoms: string[];
  treatment: string;
}

const diseases: Disease[] = [
  {
    id: 1,
    name: "Cảm cúm",
    description: "Bệnh nhiễm trùng đường hô hấp do virus gây ra",
    symptoms: ["Sốt", "Ho", "Sổ mũi", "Đau họng", "Mệt mỏi"],
    treatment: "Nghỉ ngơi, uống nhiều nước, dùng thuốc hạ sốt"
  },
  {
    id: 2,
    name: "Viêm họng",
    description: "Tình trạng viêm nhiễm ở vùng họng",
    symptoms: ["Đau họng", "Khó nuốt", "Ho", "Sốt nhẹ"],
    treatment: "Súc miệng nước muối, uống thuốc kháng viêm"
  },
  {
    id: 3,
    name: "Đau dạ dày",
    description: "Tình trạng đau ở vùng thượng vị",
    symptoms: ["Đau bụng", "Buồn nôn", "Ợ chua", "Chán ăn"],
    treatment: "Ăn uống điều độ, dùng thuốc giảm đau, kháng acid"
  },
  {
    id: 4,
    name: "Tiểu đường",
    description: "Rối loạn chuyển hóa đường trong máu",
    symptoms: ["Khát nước nhiều", "Đi tiểu nhiều", "Mệt mỏi", "Sụt cân"],
    treatment: "Kiểm soát chế độ ăn, tập thể dục, dùng thuốc theo chỉ định"
  },
  {
    id: 5,
    name: "Cao huyết áp",
    description: "Tình trạng huyết áp tăng cao",
    symptoms: ["Đau đầu", "Chóng mặt", "Mệt mỏi", "Khó thở"],
    treatment: "Giảm muối, tập thể dục, dùng thuốc huyết áp"
  }
];

const DiseaseSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredDiseases, setFilteredDiseases] = useState<Disease[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (query.trim() === '') {
      setFilteredDiseases([])
      return
    }

    const filtered = diseases.filter(disease =>
      disease.name.toLowerCase().includes(query) ||
      disease.description.toLowerCase().includes(query) ||
      disease.symptoms.some(symptom => symptom.toLowerCase().includes(query))
    )
    setFilteredDiseases(filtered)
  }

  return (
    <div className='disease-search-page'>
      <div className='search-section'>
        <input
          className='search-input'
          placeholder='Nhập tên bệnh hoặc triệu chứng'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className='results-section'>
        {filteredDiseases.map(disease => (
          <div key={disease.id} className='disease-card'>
            <h3 className='disease-name'>{disease.name}</h3>
            <p className='disease-description'>{disease.description}</p>
            <div className='disease-symptoms'>
              <h4>Triệu chứng:</h4>
              <ul>
                {disease.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>
            <div className='disease-treatment'>
              <h4>Điều trị:</h4>
              <p>{disease.treatment}</p>
            </div>
          </div>
        ))}
        {searchQuery && filteredDiseases.length === 0 && (
          <div className='no-results'>
            Không tìm thấy bệnh phù hợp với từ khóa "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  )
}

export default DiseaseSearchPage