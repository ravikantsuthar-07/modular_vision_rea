import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Lauouts/Admin/AdminLayout'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import axios from 'axios'

const AdminEditSercice = () => {
    const params = useParams()
    const id = params.id;
    const [name, setName] = useState("");
    const [short, setShort] = useState("");
    const [icons, setIcons] = useState("");
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const [describtion, setDescribtion] = useState("");
    const [describtion2, setDescribtion2] = useState("");
    const [image, setImage] = useState("");
    const [auth] = useAuth();

    const getService = async () => {
        try {
            const { data } = await axios.get(`/api/v1/service/getSingle/${id}`);
            if (data?.success) {
                setName(data?.results[0].name);
                setShort(data?.results[0].shortDesc);
                setIcons(data?.results[0].icons);
                setHeading(data?.results[0].heading);
                setSubHeading(data?.results[0].subHeading);
                setDescribtion(data?.results[0].Decs1);
                setDescribtion2(data?.results[0].Decs2);
                setImage(data?.results[0].image);
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }
    useEffect(() => {
        getService();
        // eslint-disable-next-line
    }, []);

    const handleService = async (e) => {
        e.preventDefault();
        try {
            const serviceData = new FormData();
            serviceData.append('name', name);
            serviceData.append('shortDesc', short);
            serviceData.append('icons', icons);
            serviceData.append('heading', heading);
            serviceData.append('subHeading', subHeading);
            serviceData.append('Decs1', describtion);
            serviceData.append('Decs2', describtion2);
            serviceData.append('img', image);

            const { data } = await axios.put(`/api/v1/service/update/${id}`, serviceData, {
                headers:{
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                navigator('/admin/services')
            }
        } catch (error) {
            alert(error?.responce?.data?.message);

        }
    }
    return (
        <AdminLayout>

            <main id="main" className="main">
                <div className='section align-center'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Add New Service</h3>
                                    <form method='post' onSubmit={handleService} encType="multipart/form-data" style={{ width: '100%' }}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Service Name" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Short Describtion</label>
                                                <textarea className='form-control' placeholder='Enter Short Description' value={short} onChange={(e) => setShort(e.target.value)}></textarea>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Heading</label>
                                                <input type="text" className="form-control" placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Sub Heading</label>
                                            <input type="text" className="form-control" placeholder="Sub Heading" value={subHeading} onChange={(e) => setSubHeading(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword4">Describtion</label>
                                            <textarea className='form-control' placeholder='Enter Description' value={describtion} onChange={(e) => setDescribtion(e.target.value)}></textarea>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword4">Full Describtion</label>
                                            <textarea className='form-control' placeholder='Enter Description' value={describtion2} onChange={(e) => setDescribtion2(e.target.value)}></textarea>
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Icon</label>
                                                <input type="text" className="form-control" placeholder="Icons" value={icons} onChange={(e) => setIcons(e.target.value)} />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">image</label>
                                                <input type="file" className="form-control" placeholder="Descriptions" onChange={(e) => setImage(e.target.files[0])} />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Edit Service</button>
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

export default AdminEditSercice