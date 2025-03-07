import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import axios from 'axios';

const AdminEditAboutUs = () => {
    const parms = useParams();
    const id = parms.id;

    const [heading, setHeading] = useState("");
    const [mainDescribtion, setMainDescribtion] = useState("");
    const [describtion, setDescribtion] = useState("");
    const [year, setYear] = useState("");
    const [image, setImage] = useState("");
    const [auth] = useAuth();
    const navigate = useNavigate();

    const getAboutSection = async () => {
        try {
            const { data } = await axios.get(`/api/v1/about/getSingle/${id}`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                setHeading(data?.results[0].head);
                setMainDescribtion(data?.results[0].decs1);
                setDescribtion(data?.results[0].decs2);
                setYear(data?.results[0].year);
                setImage(data?.results[0].image);
            }
        } catch (error) {
            alert(error?.responce?.data?.message)
        }
    }

    const handleAbout = async (e) => {
        e.preventDefault();
        try {
            const aboutData = new FormData();
            aboutData.append('h1', heading);
            aboutData.append('d1', mainDescribtion);
            aboutData.append('d2', describtion);
            aboutData.append('year', year);
            aboutData.append('img', image);
            const { data } = await axios.put(`/api/v1/about/update/${id}`, aboutData, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                navigate(`/admin.about`)
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }

    useEffect(() => {
        getAboutSection();
        // eslint-disable-next-line
    }, [])
    return (
        <AdminLayout>

            <main id="main" className="main">
                <div className='section align-center'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Edit About Section # {id}</h3>
                                    <form method='post' onSubmit={handleAbout} encType="multipart/form-data" style={{ width: '100%' }}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Heading</label>
                                                <input type="text" className="form-control" value={heading} id="inputEmail4" placeholder="Heading" onChange={(e) => setHeading(e.target.value)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Main Describtion</label>
                                                <textarea className="form-control" placeholder="Descriptions" onChange={(e) => setMainDescribtion(e.target.value)} value={mainDescribtion}>  </textarea>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Describtion</label>
                                                <textarea className="form-control" placeholder="Descriptions" onChange={(e) => setDescribtion(e.target.value)} value={describtion}>  </textarea>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">When was Your Orgainer is Started</label>
                                                <select className='form-control' value={year} onChange={(e) => setYear(e.target.value)}>
                                                    <option value={'2025'}>2025</option>
                                                    <option value={'2024'}>2024</option>
                                                    <option value={'2023'}>2023</option>
                                                    <option value={'2022'}>2022</option>
                                                    <option value={'2021'}>2021</option>
                                                    <option value={'2020'}>2020</option>
                                                    <option value={'2019'}>2019</option>
                                                    <option value={'2018'}>2018</option>
                                                    <option value={'2017'}>2017</option>
                                                    <option value={'2016'}>2016</option>
                                                    <option value={'2015'}>2015</option>
                                                    <option value={'2014'}>2014</option>
                                                    <option value={'2013'}>2013</option>
                                                    <option value={'2012'}>2012</option>
                                                    <option value={'2011'}>2011</option>
                                                    <option value={'2010'}>2010</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">image</label>
                                                <input type="file" className="form-control" placeholder="Descriptions" onChange={(e) => setImage(e.target.files[0])} />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Add About Section</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AdminLayout>
    )
}

export default AdminEditAboutUs