


import { Select, TextArea, TextField, Tooltip } from '@radix-ui/themes'

const CertificateForm = () => {

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className='w-2/5 gap-3 flex flex-col'>
        <Tooltip content='Certificate Date'>
            <TextField.Root size={'3'} color='purple' variant='soft' type='date' />
        </Tooltip>
            <TextField.Root size={'3'} color='purple' placeholder='Institution' variant='soft' type='text' />
            <TextField.Root size={'3'} color='purple' placeholder='Qualification' variant='soft' type='text' />

            <Select.Root size={'3'}>
                <Tooltip content='Certificate Category'>
                    <Select.Trigger color='purple' placeholder='Select Category...' />
                </Tooltip>
                <Select.Content variant='soft'>
                    <Select.Group>
                        <Select.Label>Certificate Category</Select.Label>
                        <Select.Item value="WEB_DEVELOPMENT">Web Development</Select.Item>
                        <Select.Item value="CYBER_SECURITY">Cyber Security</Select.Item>
                        <Select.Item value="MOBILE_DEVELOPMENT">Mobile Development</Select.Item>
                        <Select.Item value="MACHINE_LEARNING">Machine Learning</Select.Item>
                        <Select.Item value="JAVASCRIPT">Javascript</Select.Item>
                        <Select.Item value="PYTHON">Python</Select.Item>
                        <Select.Item value="AI">AI</Select.Item>
                        <Select.Item value="UI_UX_DESIGN">UI & UX Design</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>

            <Select.Root size={'3'}>
                <Tooltip content='Certificate Status'>
                    <Select.Trigger placeholder='Select Status...' />
                </Tooltip>
                <Select.Content variant='soft'>
                    <Select.Group>
                        <Select.Label>Certificate Status</Select.Label>
                        <Select.Item value="COMPLETE">Complete</Select.Item>
                        <Select.Item value="IN_PROGRESS">In Progress</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>

            <TextArea size={'3'} color='purple' placeholder='Enter Certificate Description' variant='soft'/>
            <TextField.Root size={'3'} color='purple' placeholder='Enter Name' variant='soft' type='text'/>
            <input type="file"/>
        </div>
    </div>
  )
}

export default CertificateForm